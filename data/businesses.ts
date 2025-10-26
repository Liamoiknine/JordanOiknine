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
    name: "Lawn Link Management LLC",
    tagline: "Gotta make sure that lawn stays fresh",
    description:
      "What started as a summer side hustle has grown into a thriving business around the STL. A buddy of mine and I manage everything from scheduling to customer relationships, learning valuable lessons about entrepreneurship, reliability, and the satisfaction of building something from scratch.",
    achievements: [
      "Built a client base of over 25 regular customers through word-of-mouth referrals",
      "Manage all aspects of operations: scheduling, pricing, customer service, and quality control",
      "Reinvested profits to upgrade equipment and expand service offerings to hardscaping",
      "Maintained 95% customer retention rate through reliable, high-quality service (can't win em' all)",
    ],
    impact: "Top-rated lawn care service on NextDoor Neighbor",
  },
  {
    id: "soccer-coaching",
    name: "Jordan Oiknine Private Soccer Training",
    tagline: "Inclusive soccer coaching for players of ALL levels",
    description:
      "Combining my passion for soccer with a commitment to inclusion, I created adaptive training sessions for kids ranging from club level to players with special needs. It taught me that the best coaching isn't about perfection, rather, building confidence, joy, and a love for the game. At the end of the day it's a kids game at best.",
    achievements: [
      "Trained 40+ kids with diverse abilities in fundamental soccer skills and teamwork",
      "Developed customized coaching techniques tailored to individual needs and learning styles",
      "Created a welcoming environment where every participant can thrive",
      "Led Kicks-for-a-cause fundraisers to expand impact",
    ],
    impact: "$1000 donated to the Special Needs Soccer Association",
  },
];

