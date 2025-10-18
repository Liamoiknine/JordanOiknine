export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  category: "sports" | "leadership" | "service" | "business";
  impact?: string;
  parentId?: string | null; // For tree structure
  level: number; // Depth in tree
  offsetY?: number; // Vertical offset for siblings
}

export const experiences: Experience[] = [
  {
    id: "soccer",
    title: "Varsity Soccer Athlete",
    organization: "High School Team",
    period: "2021 - Present",
    description:
      "Starting midfielder with 3 years of varsity experience. Team captain, leading practices and coordinating team strategy. Balancing rigorous training with academic excellence.",
    category: "sports",
    impact: "3 years varsity • Team captain",
    parentId: null,
    level: 0,
  },
  {
    id: "deca",
    title: "DECA Competitor",
    organization: "Business Competition",
    period: "2023 - Present",
    description:
      "Competing in business case studies and entrepreneurship events. Advanced to state competition, developing skills in marketing, finance, and strategic planning.",
    category: "leadership",
    impact: "State qualifier",
    parentId: null,
    level: 0,
    offsetY: 150, // Slightly lower than soccer
  },
  {
    id: "lactasense",
    title: "LactaSense - Biotech Research",
    organization: "Independent Research",
    period: "2024 - Present",
    description:
      "Developing a lactose intolerance detection system using biosensors. Combining biotech knowledge with entrepreneurial skills learned through DECA to create a practical healthcare solution.",
    category: "leadership",
    impact: "Biotech innovation project",
    parentId: "deca",
    level: 1,
  },
  {
    id: "lawncare",
    title: "Lawncare Business Founder",
    organization: "Self-employed",
    period: "2022 - Present",
    description:
      "Started and manage a successful lawn care service business, handling client relationships, scheduling, and quality control. Developed strong entrepreneurial skills and learned the value of hard work.",
    category: "business",
    impact: "15+ regular clients",
    parentId: "lactasense",
    level: 2,
  },
  {
    id: "soccer-coaching",
    title: "Soccer Coach",
    organization: "Special Needs Youth Program",
    period: "2023 - Present",
    description:
      "Volunteer coach for youth soccer program serving kids with special needs. Create adaptive training sessions that build confidence and skills in a supportive environment.",
    category: "service",
    impact: "50+ kids trained",
    parentId: "lactasense",
    level: 2,
    offsetY: 150, // Slightly lower than lawncare
  },
  {
    id: "kick-for-cause",
    title: "Kick for a Cause",
    organization: "Community Initiative",
    period: "2024 - Present",
    description:
      "Founded a soccer-based fundraising program that combines my passion for the sport with community service. Organizing tournaments and clinics where proceeds support local youth programs.",
    category: "service",
    impact: "$3,000+ raised for youth programs",
    parentId: "soccer-coaching",
    level: 3,
  },
];

// Helper to build tree structure
export function buildTree(experiences: Experience[]) {
  const nodeMap = new Map<string, Experience & { children: Experience[] }>();
  
  // Initialize all nodes
  experiences.forEach(exp => {
    nodeMap.set(exp.id, { ...exp, children: [] });
  });
  
  // Build parent-child relationships
  const roots: (Experience & { children: Experience[] })[] = [];
  experiences.forEach(exp => {
    const node = nodeMap.get(exp.id)!;
    if (exp.parentId) {
      const parent = nodeMap.get(exp.parentId);
      if (parent) {
        parent.children.push(node);
      }
    } else {
      roots.push(node);
    }
  });
  
  return { nodeMap, roots };
}
