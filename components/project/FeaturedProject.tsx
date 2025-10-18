"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Image - 7 columns */}
      <Link
        href={`/work/${project.slug}`}
        className="lg:col-span-7 group cursor-pointer"
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content - 5 columns */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
            Featured Project
          </span>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {project.title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;

