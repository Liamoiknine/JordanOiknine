"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: Trophy,
    title: "Competitive Soccer Athlete",
    organization: "High School Varsity Team",
    period: "2021 - Present",
    description:
      "Starting midfielder with 3 years of varsity experience. Team captain, leading practices and coordinating team strategy. Balancing rigorous training with academic excellence.",
    side: "left",
  },
  {
    icon: Users,
    title: "UNICEF Club Leader",
    organization: "School Chapter",
    period: "2022 - Present",
    description:
      "Founded and lead school's UNICEF chapter, organizing fundraisers and awareness campaigns. Raised over $5,000 for global children's initiatives and coordinated volunteer efforts.",
    side: "right",
  },
  {
    icon: TrendingUp,
    title: "DECA Participant",
    organization: "Business Competition",
    period: "2023 - Present",
    description:
      "Competing in business case studies and entrepreneurship events. Advanced to state competition, developing skills in marketing, finance, and strategic planning.",
    side: "left",
  },
];

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-8 mb-16 ${
        experience.side === "right" ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: experience.side === "left" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content */}
      <div className="flex-1">
        <div
          className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 ${
            experience.side === "right" ? "text-right" : ""
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            {experience.side === "right" && (
              <>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.period}
                </span>
                <div className="flex-1" />
              </>
            )}
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
              <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            {experience.side === "left" && (
              <>
                <div className="flex-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.period}
                </span>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
          <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
            {experience.organization}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-950"></div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-primary-600 to-primary-300 dark:from-primary-400 dark:to-primary-600"></div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building skills through athletics, academics, and leadership roles
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

