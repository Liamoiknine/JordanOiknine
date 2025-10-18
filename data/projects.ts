export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  date: string;
  links?: {
    github?: string;
    live?: string;
    paper?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "biotech-research-project-1",
    title: "CRISPR Gene Editing Research",
    description:
      "Investigated the applications of CRISPR-Cas9 technology in treating genetic disorders. Conducted literature review and theoretical analysis.",
    fullDescription: `
      <h2>Overview</h2>
      <p>This research project explored the revolutionary potential of CRISPR-Cas9 gene editing technology in addressing hereditary genetic disorders. The study focused on understanding the mechanisms, applications, and ethical considerations of this groundbreaking biotechnology.</p>
      
      <h2>Research Goals</h2>
      <ul>
        <li>Analyze current CRISPR applications in medical treatment</li>
        <li>Evaluate the efficacy and safety of gene editing techniques</li>
        <li>Examine ethical implications of genetic modification</li>
        <li>Propose future research directions</li>
      </ul>
      
      <h2>Methodology</h2>
      <p>Conducted extensive literature review of peer-reviewed journals, analyzed case studies, and created theoretical models for potential applications.</p>
      
      <h2>Key Findings</h2>
      <p>The research highlighted significant promise in treating sickle cell disease and certain forms of inherited blindness, while also identifying important safety and ethical considerations that require careful attention.</p>
      
      <h2>Impact</h2>
      <p>This work deepened my understanding of biotechnology's role in medicine and inspired further study in genetic engineering.</p>
    `,
    tags: ["Biotech", "CRISPR", "Genetics", "Research"],
    image: "https://placehold.co/800x600/3b82f6/ffffff?text=CRISPR+Research",
    date: "2024",
    links: {
      paper: "#",
    },
  },
  {
    slug: "biotech-research-project-2",
    title: "Microbiome Analysis Study",
    description:
      "Studied the human gut microbiome and its impact on overall health. Explored connections between microbiota diversity and immune function.",
    fullDescription: `
      <h2>Overview</h2>
      <p>This project investigated the complex relationship between the human gut microbiome and various aspects of health, including immunity, metabolism, and mental well-being.</p>
      
      <h2>Research Focus</h2>
      <ul>
        <li>Understanding microbiome composition and diversity</li>
        <li>Analyzing connections to immune system function</li>
        <li>Investigating dietary impacts on microbiota</li>
        <li>Exploring therapeutic potential of microbiome modulation</li>
      </ul>
      
      <h2>Approach</h2>
      <p>Reviewed current scientific literature, analyzed published microbiome datasets, and created visualizations to illustrate key relationships between microbiota composition and health outcomes.</p>
      
      <h2>Discoveries</h2>
      <p>The research revealed fascinating connections between gut health and systemic wellness, highlighting the importance of maintaining diverse microbial populations.</p>
    `,
    tags: ["Biotech", "Microbiome", "Health", "Research"],
    image: "https://placehold.co/800x600/8b5cf6/ffffff?text=Microbiome+Study",
    date: "2024",
  },
  {
    slug: "biotech-research-project-3",
    title: "Sustainable Biofuel Development",
    description:
      "Explored the potential of algae-based biofuels as a renewable energy source. Analyzed production methods and environmental impact.",
    fullDescription: `
      <h2>Overview</h2>
      <p>This research focused on the potential of microalgae as a sustainable source of biofuel, examining cultivation methods, lipid extraction processes, and environmental benefits.</p>
      
      <h2>Project Objectives</h2>
      <ul>
        <li>Evaluate different algae species for biofuel production</li>
        <li>Compare cultivation methods and efficiency</li>
        <li>Assess environmental impact versus fossil fuels</li>
        <li>Calculate theoretical production scalability</li>
      </ul>
      
      <h2>Methodology</h2>
      <p>Conducted theoretical analysis of published research, created comparative models of different algae strains, and calculated potential carbon reduction impacts.</p>
      
      <h2>Outcomes</h2>
      <p>Identified promising algae species and cultivation approaches that could contribute to renewable energy solutions while reducing carbon emissions.</p>
    `,
    tags: ["Biotech", "Sustainability", "Energy", "Research"],
    image: "https://placehold.co/800x600/10b981/ffffff?text=Biofuel+Research",
    date: "2023",
  },
  {
    slug: "biotech-research-project-4",
    title: "Cancer Immunotherapy Analysis",
    description:
      "Researched emerging immunotherapy treatments for cancer. Focused on CAR-T cell therapy and checkpoint inhibitors.",
    fullDescription: `
      <h2>Overview</h2>
      <p>This project investigated cutting-edge immunotherapy approaches to cancer treatment, with particular focus on CAR-T cell therapy and immune checkpoint inhibitors.</p>
      
      <h2>Research Areas</h2>
      <ul>
        <li>CAR-T cell engineering and applications</li>
        <li>Checkpoint inhibitor mechanisms</li>
        <li>Treatment efficacy across cancer types</li>
        <li>Patient response patterns and biomarkers</li>
      </ul>
      
      <h2>Analysis</h2>
      <p>Reviewed clinical trial data, analyzed success rates across different cancer types, and examined factors influencing treatment outcomes.</p>
      
      <h2>Insights</h2>
      <p>The research highlighted the transformative potential of immunotherapy while identifying challenges in accessibility and patient selection.</p>
    `,
    tags: ["Biotech", "Immunotherapy", "Cancer", "Research"],
    image: "https://placehold.co/800x600/ec4899/ffffff?text=Cancer+Research",
    date: "2023",
  },
];

