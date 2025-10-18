"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import FeaturedProject from "@/components/project/FeaturedProject";
import ProjectGrid from "@/components/project/ProjectGrid";
import FloatingNav from "@/components/FloatingNav";

const WorkView = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="min-h-screen">
      <FloatingNav />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Work
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Research projects exploring biotechnology, genetics, and scientific innovation
          </p>
        </motion.div>

        {/* Featured Project */}
        <FeaturedProject project={featuredProject} />

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
            <motion.h2
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              More Projects
            </motion.h2>
            <ProjectGrid projects={otherProjects} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkView;

