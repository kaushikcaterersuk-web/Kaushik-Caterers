import { Occasion, Service } from './types';

export const BUSINESS_INFO = {
  name: "Kaushik Caterers",
  founder: "Rahul",
  phone: "+91 9897159674",
  address: "Dwarika Puri, New Park Road, Gandhi Gram, Mdda Colony, Dehradun-248001, Uttarakhand",
  timings: "All Days (09:00 AM to 07:00 PM)",
  gstin: "05BJTPK9335D1ZY",
  experience: "Since 1985",
  years: "41+",
  satisfaction: "100%",
  customers: "4000+",
  capacity: "Upto 800 Person",
  location: "Dehradun + PAN India",
  email: "kaushikcaterersuk@gmail.com",
};

export const TESTIMONIALS = [
  {
    name: "Pritam kumar",
    text: "Kaushik Caterers is a great place! The food is fresh and very tasty. You get good quantity for a reasonable price. It`s child-friendly, so families will love it. The ambience is nice and welcoming.",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Shalini Paswan",
    text: "We had an office party catered by Kaushik Caterers, and it was flawless from start to end. The staff was professional, the setup was neat, and the biryani had everyone going for seconds!",
    role: "Office Party Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Riya",
    text: "Kaushik Caterers never fails to impress—booked them for our wedding and they delivered beyond expectations. Clean presentation, flavorful dishes, and live catering were spot on.",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "catering-service",
    title: "Catering Service",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    description: "Exquisite multi-cuisine menus tailored to your taste.",
    subServices: [
      { name: "Caterer", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400" },
      { name: "Barbecue catering", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=400" },
      { name: "Brunch catering", image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&q=80&w=400" },
      { name: "Buffet catering", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" },
      { name: "Corporate catering", image: "https://images.unsplash.com/photo-1484156818044-c040038b0719?auto=format&fit=crop&q=80&w=400" },
      { name: "Dinner catering", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400" },
      { name: "Event catering", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Graduation catering", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" },
      { name: "Party catering", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400" },
      { name: "Personal chef catering", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" },
      { name: "Private catering", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Wedding catering", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" },
      { name: "Breakfast Catering", image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=400" },
      { name: "Business Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Catering Buffet", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" },
      { name: "Festivals Catering", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Lunch Catering", image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=400" },
      { name: "Outdoor Events", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Vegetarian Catering", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "parties",
    title: "Parties",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800",
    description: "Vibrant and fun setups for all types of parties.",
    subServices: [
      { name: "Birthday Party", image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=400" },
      { name: "Kitty Parties", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Office Party", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Bachelorette Party", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=400" },
      { name: "Children's party planning", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Retirement party planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "School event", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" },
      { name: "Theme parties", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400" },
      { name: "Theme party", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400" },
      { name: "Anniversary party planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Baby shower planning", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=400" },
      { name: "Bar & bat mitzvah planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "get-together",
    title: "Get together",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    description: "Perfect planning for family and friend reunions.",
    subServices: [
      { name: "All Get Together", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Team building event coordination", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Team building event planning", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Private event planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "wedding",
    title: "Wedding",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    description: "Grand wedding planning and catering for your big day.",
    subServices: [
      { name: "Wedding", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" },
      { name: "Engagement", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=400" },
      { name: "Naming Ceremony", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Mehendi Ceremony", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" },
      { name: "Wedding and engagement", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" },
      { name: "Weddings", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "functions",
    title: "Functions",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    description: "Professional management for formal and religious functions.",
    subServices: [
      { name: "Anniversary", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Baby Shower", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=400" },
      { name: "New Year", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Religious event", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400" },
      { name: "Religious event planning", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400" },
      { name: "Carnival", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Cultural Events", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" },
      { name: "Conference coordination", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Conference planning", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Corporate events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Water Sports", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400" },
      { name: "Sports", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400" },
      { name: "Decorations", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400" },
      { name: "Event decor design", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400" },
      { name: "Event decor rental", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400" },
      { name: "Event staffing", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" },
      { name: "Outdoor event planning", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "bhandara",
    title: "Bhandara",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=800",
    description: "Traditional large-scale community feast catering.",
    subServices: [
      { name: "Traditional Bhandara", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400" },
      { name: "Community Feast", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400" },
      { name: "Religious Gathering Catering", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "music",
    title: "Music",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a7?auto=format&fit=crop&q=80&w=800",
    description: "Soulful live performances and DJ to enchant your guests.",
    subServices: [
      { name: "Music Show", image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a7?auto=format&fit=crop&q=80&w=400" },
      { name: "Dance Parties", image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a7?auto=format&fit=crop&q=80&w=400" },
      { name: "DJ", image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a7?auto=format&fit=crop&q=80&w=400" },
      { name: "Live Music", image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a7?auto=format&fit=crop&q=80&w=400" },
      { name: "Live Performances", image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a7?auto=format&fit=crop&q=80&w=400" }
    ]
  }
];

export const OCCASIONS: Occasion[] = [
  { title: "Birthday Parties", image: "https://picsum.photos/seed/birthday/800/600", description: "Make your special day unforgettable with our vibrant catering and decor." },
  { title: "Kitty Parties", image: "https://picsum.photos/seed/kitty/800/600", description: "Elegant and fun setups for your social gatherings." },
  { title: "Corporate/School Parties", image: "https://picsum.photos/seed/corporate/800/600", description: "Professional catering and planning for formal events." },
  { title: "Anniversary", image: "https://picsum.photos/seed/anniversary/800/600", description: "Celebrate years of togetherness with premium service." },
  { title: "Wedding", image: "https://picsum.photos/seed/wedding/800/600", description: "Grand wedding planning and catering for your big day." },
  { title: "Bhandara", image: "https://picsum.photos/seed/bhandara/800/600", description: "Traditional large-scale community feast catering." },
  { title: "Tent", image: "https://picsum.photos/seed/tent/800/600", description: "High-quality tenting solutions for all weather conditions." },
  { title: "Decoration", image: "https://picsum.photos/seed/decoration/800/600", description: "Thematic and floral decorations that set the mood." },
  { title: "Catering", image: "https://picsum.photos/seed/catering/800/600", description: "Exquisite multi-cuisine menus tailored to your taste." },
  { title: "All Get Together", image: "https://picsum.photos/seed/gathering/800/600", description: "Perfect planning for family and friend reunions." },
];

export const SERVICES: Service[] = [
  { title: "DJ", icon: "Music", description: "Professional sound and music for every mood." },
  { title: "Venue Selection", icon: "MapPin", description: "Helping you find the perfect spot for your event." },
  { title: "Live Music", icon: "Mic2", description: "Soulful live performances to enchant your guests." },
  { title: "Decorator", icon: "Palette", description: "Creative decor that transforms spaces." },
  { title: "Live Performances", icon: "Users", description: "Engaging artists and performers for entertainment." },
  { title: "Book Appointment", icon: "Calendar", description: "Consult with our experts for your planning." },
  { title: "Tent", icon: "Tent", description: "Sturdy and beautiful tent setups." },
];
