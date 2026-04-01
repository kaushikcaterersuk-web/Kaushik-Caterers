import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getEventSuggestions(prompt: string) {
  try {
    const response = await ai.models.generateContent({
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

    return response.text;
  } catch (error) {
    console.error("Error getting AI suggestions:", error);
    return "I'm sorry, I'm having trouble connecting to my planning brain right now. Please try again or contact our team directly!";
  }
}
