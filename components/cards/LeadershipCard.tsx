"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Leadership } from "@/data/leadership";

interface LeadershipCardProps {
  role: Leadership;
  index: number;
}

const LeadershipCard = ({ role, index }: LeadershipCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all shadow-lg hover:shadow-2xl">
          <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
            {role.period}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {role.organization}
          </p>
          
          {!isExpanded && (
            <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
              {role.description}
            </p>
          )}
          
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {role.description}
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Key Achievements
                </div>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-primary-600 dark:text-primary-400 mt-0.5">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="text-lg font-medium text-primary-600 dark:text-primary-400">
                  {role.impact}
                </div>
              </div>
            </motion.div>
          )}
          
          <div className="mt-4 text-sm text-gray-400 dark:text-gray-600">
            {isExpanded ? "Click to collapse" : "Click to learn more"}
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default LeadershipCard;

