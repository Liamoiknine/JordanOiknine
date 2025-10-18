"use client";

import { motion } from "framer-motion";

const journeyItems = [
  {
    id: 1,
    title: "Varsity Soccer Athlete",
    period: "2021 - Present",
    description: "Team captain and starting midfielder with 3 years varsity experience",
  },
  {
    id: 2,
    title: "DECA Competitor",
    period: "2023 - Present",
    description: "State qualifier in business competitions, developing entrepreneurial skills",
  },
  {
    id: 3,
    title: "LactaSense",
    period: "2024",
    description: "DECA international finalist biotech project for lactose intolerance detection",
  },
  {
    id: 4,
    title: "Lawncare Business",
    period: "2022 - Present",
    description: "Founded and manage successful lawn care service with 15+ clients",
  },
  {
    id: 5,
    title: "Soccer Coaching",
    period: "2023 - Present",
    description: "Volunteer coach for special needs youth soccer program, 50+ kids trained",
  },
  {
    id: 6,
    title: "Kick for a Cause",
    period: "2024 - Present",
    description: "Soccer-based fundraising initiative raising $3,000+ for youth programs",
  },
];

const JourneyTimeline = () => {
  return (
    <div className="w-full">
      <motion.div
        className="sticky top-32"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-lg font-bold mb-6">The Journey</h3>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
          
          {/* Timeline items */}
          <div className="space-y-6">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-3 z-10 w-3 h-3">
                  <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 rounded-full" />
                </div>
                
                {/* Card */}
                <div className="ml-10 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all">
                  <div className="text-xs font-medium text-primary-600 dark:text-primary-400 mb-1">
                    {item.period}
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JourneyTimeline;

