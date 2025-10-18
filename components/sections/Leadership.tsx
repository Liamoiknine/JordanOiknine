"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Briefcase, Sparkles } from "lucide-react";

const leadershipRoles = [
  {
    icon: Heart,
    title: "UNICEF Club President",
    description:
      "Founded and lead the school's UNICEF chapter, organizing fundraising events and raising awareness about global children's issues. Built a team of 20+ active members.",
    impact: "$5,000+ raised",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Lawncare Business Founder",
    description:
      "Started and manage a successful lawn care service business, handling client relationships, scheduling, and quality control. Developed strong entrepreneurial skills.",
    impact: "15+ regular clients",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Soccer Trainer",
    description:
      "Volunteer coach for youth soccer program serving kids with special needs. Create adaptive training sessions that build confidence and skills in a supportive environment.",
    impact: "50+ kids trained",
    color: "primary",
  },
];

const LeadershipCard = ({ role, index }: { role: typeof leadershipRoles[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = role.icon;

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div
          className={`inline-flex p-4 rounded-xl mb-6 ${
            role.color === "primary"
              ? "bg-primary-100 dark:bg-primary-900/30"
              : "bg-accent-100 dark:bg-accent-900/30"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${
              role.color === "primary"
                ? "text-primary-600 dark:text-primary-400"
                : "text-accent-600 dark:text-accent-400"
            }`}
          />
        </div>

        <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {role.description}
        </p>

        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
            role.color === "primary"
              ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
              : "bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300"
          }`}
        >
          {role.impact}
        </div>
      </div>
    </motion.div>
  );
};

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Leadership & Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leading initiatives that create positive change in my community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipRoles.map((role, index) => (
            <LeadershipCard key={index} role={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

