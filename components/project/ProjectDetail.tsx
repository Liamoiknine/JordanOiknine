"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import FloatingNav from "@/components/FloatingNav";

interface ProjectDetailProps {
  project: Project;
  nextProject?: Project;
}

const ProjectDetail = ({ project, nextProject }: ProjectDetailProps) => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingNav />

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] lg:h-[60vh] bg-gray-200 dark:bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header - Overlapping hero */}
        <motion.div
          className="relative -mt-20 lg:-mt-32 mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{project.date}</span>
            </div>
          </div>
        </motion.div>

        {/* Links */}
        {project.links && (
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Code →
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Live Demo →
              </a>
            )}
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
              >
                Read Paper →
              </a>
            )}
          </motion.div>
        )}

        {/* Full Description */}
        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none mb-20 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-ul:text-gray-600 dark:prose-ul:text-gray-300 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        {/* Next Project */}
        {nextProject && (
          <motion.div
            className="py-16 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Next Project
            </p>
            <Link href={`/work/${nextProject.slug}`}>
              <div className="group flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {nextProject.description.slice(0, 100)}...
                  </p>
                </div>
                <div className="text-2xl text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 group-hover:translate-x-2 transition-all">
                  →
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>

      <div className="h-20" /> {/* Bottom spacing */}
    </motion.div>
  );
};

export default ProjectDetail;

