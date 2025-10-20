export interface Business {
  id: string;
  name: string;
  description: string;
  tagline: string;
  achievements: string[];
  impact: string;
}

export const businesses: Business[] = [
  {
    id: "lawncare",
    name: "Oiknine Lawncare",
    tagline: "Professional lawn care services for your neighborhood",
    description:
      "What started as a summer side hustle has grown into a thriving local business. I manage everything from scheduling to customer relationships, learning valuable lessons about entrepreneurship, reliability, and the satisfaction of building something from scratch.",
    achievements: [
      "Built a client base of 15+ regular customers through word-of-mouth referrals",
      "Manage all aspects of operations: scheduling, pricing, customer service, and quality control",
      "Reinvested profits to upgrade equipment and expand service offerings",
      "Maintained 100% customer retention rate through reliable, high-quality service",
    ],
    impact: "15+ Regular Clients",
  },
  {
    id: "soccer-coaching",
    name: "Adaptive Soccer Training",
    tagline: "Inclusive soccer coaching for kids with special needs",
    description:
      "Combining my passion for soccer with a commitment to inclusion, I created adaptive training sessions for kids with special needs. It's taught me that the best coaching isn't about perfection—it's about building confidence, joy, and a love for the game.",
    achievements: [
      "Trained 50+ kids with diverse abilities in fundamental soccer skills and teamwork",
      "Developed customized coaching techniques tailored to individual needs and learning styles",
      "Created a welcoming, judgment-free environment where every participant can thrive",
      "Partnered with local organizations to expand program reach and accessibility",
    ],
    impact: "50+ Kids Trained",
  },
];

