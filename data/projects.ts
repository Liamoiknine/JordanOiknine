export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
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
    slug: "lactasense",
    title: "LactaSense",
    description:
      "DECA International Finalist project. Developed a rapid lactose intolerance detection system using biosensor technology. Combining entrepreneurship with biotech innovation to solve a real-world health problem.",
    fullDescription: `
      <h2>Overview</h2>
      <p>LactaSense is a rapid lactose intolerance detection system that I developed for DECA's international competition, where it became an international finalist. The project combines biosensor technology with practical healthcare applications to solve a common digestive health problem.</p>
      
      <h2>The Problem</h2>
      <p>Current lactose intolerance testing is expensive, time-consuming, and often uncomfortable. Many people go undiagnosed or self-diagnose incorrectly, leading to unnecessary dietary restrictions or continued discomfort.</p>
      
      <h2>The Solution</h2>
      <p>LactaSense uses enzymatic biosensors to detect lactose metabolism byproducts in a simple, at-home test. Users get results in minutes rather than days, making diagnosis more accessible and affordable.</p>
      
      <h2>Business Model</h2>
      <ul>
        <li>Direct-to-consumer test kits</li>
        <li>Partnership with primary care physicians</li>
        <li>Subscription model for dietary tracking</li>
        <li>Data-driven personalized nutrition recommendations</li>
      </ul>
      
      <h2>DECA Competition</h2>
      <p>Presented LactaSense at DECA's international conference, competing against hundreds of entrepreneurship projects. The judges praised the combination of scientific innovation with practical business applications.</p>
      
      <h2>What I Learned</h2>
      <p>This project taught me that great innovation isn't just about the science—it's about understanding market needs, building a viable business model, and communicating complex ideas clearly. It's where my biotech passion meets real-world entrepreneurship.</p>
    `,
    image: "https://placehold.co/800x600/3b82f6/ffffff?text=LactaSense",
    date: "2024",
    links: {
      paper: "#",
    },
  },
  {
    slug: "bioimpedance-sensor",
    title: "Bioimpedance Sensor",
    description:
      "Designing a non-invasive bioimpedance sensor for real-time health monitoring. Using electrical impedance to measure body composition, hydration levels, and metabolic changes.",
    fullDescription: `
      <h2>Overview</h2>
      <p>Bioimpedance sensing uses small electrical currents to measure the body's impedance (resistance and reactance). Different tissues have different impedance values, allowing us to non-invasively monitor health metrics in real-time.</p>
      
      <h2>What It Measures</h2>
      <ul>
        <li>Body composition (fat vs. muscle mass)</li>
        <li>Hydration levels and fluid distribution</li>
        <li>Metabolic rate indicators</li>
        <li>Cardiovascular health markers</li>
      </ul>
      
      <h2>Technical Approach</h2>
      <p>The sensor uses multi-frequency bioimpedance analysis (BIA) with custom-designed electrodes. Signal processing algorithms filter noise and extract meaningful health data from the impedance measurements.</p>
      
      <h2>Applications</h2>
      <p>This technology could help athletes optimize training, assist patients with chronic conditions in monitoring their health, and provide early warning signs of dehydration or other health issues.</p>
      
      <h2>Current Status</h2>
      <p>Currently in prototype phase, testing accuracy against clinical-grade equipment and refining the sensor design for improved signal quality.</p>
    `,
    image: "https://placehold.co/800x600/8b5cf6/ffffff?text=Bioimpedance",
    date: "2024",
  },
];

