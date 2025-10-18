export interface Leadership {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  impact: string;
  achievements: string[];
}

export const leadership: Leadership[] = [
  {
    id: "unicef",
    title: "UNICEF Club President",
    organization: "School Chapter Founder",
    period: "2022 - Present",
    description:
      "Founded and lead our school's UNICEF chapter from the ground up. What started as an idea became a community of students committed to making a global impact. We've organized fundraisers, awareness campaigns, and volunteer initiatives that have raised thousands for children's causes worldwide.",
    impact: "$5,000+ raised • 20+ active members",
    achievements: [
      "Founded school's first UNICEF chapter",
      "Organized 6+ major fundraising events",
      "Built team of 20+ dedicated volunteers",
      "Raised over $5,000 for global children's initiatives",
    ],
  },
  {
    id: "soccer-captain",
    title: "Varsity Soccer Captain",
    organization: "High School Team",
    period: "2023 - Present",
    description:
      "Leading the team both on and off the field as captain. It's more than coordinating plays—it's about building trust, maintaining morale through tough games, and helping teammates push past their limits. Soccer taught me that great leadership means showing up, even when it's hard.",
    impact: "3 years varsity • Team captain • Starting midfielder",
    achievements: [
      "3 years of varsity experience",
      "Team captain and starting midfielder",
      "Lead practices and coordinate team strategy",
      "Balance rigorous athletics with academic excellence",
    ],
  },
];

