export interface Business {
  id: string;
  name: string;
  description: string;
  tagline: string;
  externalLink: string;
}

export const businesses: Business[] = [
  {
    id: "lawncare",
    name: "Oiknine Lawncare",
    tagline: "Professional lawn care services for your neighborhood",
    description:
      "What started as a summer side hustle has grown into a thriving local business. I manage everything from scheduling to customer relationships, learning valuable lessons about entrepreneurship, reliability, and the satisfaction of building something from scratch.",
    externalLink: "https://oikninelawncare.com", // Placeholder - replace with actual link
  },
  {
    id: "soccer-coaching",
    name: "Adaptive Soccer Training",
    tagline: "Inclusive soccer coaching for kids with special needs",
    description:
      "Combining my passion for soccer with a commitment to inclusion, I created adaptive training sessions for kids with special needs. It's taught me that the best coaching isn't about perfection—it's about building confidence, joy, and a love for the game.",
    externalLink: "https://adaptivesoccertraining.com", // Placeholder - replace with actual link
  },
];

