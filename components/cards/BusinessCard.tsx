"use client";

import { motion } from "framer-motion";
import { Business } from "@/data/businesses";

interface BusinessCardProps {
  business: Business;
  index: number;
}

const BusinessCard = ({ business, index }: BusinessCardProps) => {
  return (
    <motion.a
      href={business.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all shadow-lg hover:shadow-2xl">
        <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
          {business.tagline}
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{business.name}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {business.description}
        </p>
        
        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium group-hover:gap-3 transition-all">
          Visit Site →
        </div>
      </div>
    </motion.a>
  );
};

export default BusinessCard;

