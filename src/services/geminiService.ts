import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAIInstance() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please configure it in your environment secrets.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function* getEventSuggestionsStream(prompt: string) {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are an expert event planner for "Kaushik Caterers", a premium catering and event planning company in Dehradun, India, established in 1985. 
        Your goal is to help users plan their events (weddings, birthdays, corporate parties, etc.). 
        Provide creative suggestions for:
        1. Menu items (Indian, Continental, Chinese, etc.)
        2. Decoration themes
        3. Logistics and timing
        4. Entertainment (DJ, Live Music, etc.)
        
        Always maintain a professional, helpful, and premium tone. Mention that Kaushik Caterers provides fully customizable menus and professional staff.
        Keep responses concise and well-formatted using Markdown.`,
      },
    });

    for await (const chunk of response) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Error getting AI suggestions:", error);
    if (error instanceof Error && error.message.includes("GEMINI_API_KEY")) {
      yield "Configuration Error: The AI Planner is missing its API Key. Please ensure GEMINI_API_KEY is set in the environment.";
    } else {
      yield "I'm sorry, I'm having trouble connecting to my planning brain right now. Please try again or contact our team directly!";
    }
  }
}
