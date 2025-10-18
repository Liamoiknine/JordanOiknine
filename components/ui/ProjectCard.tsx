"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className={`font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-gray-600 dark:text-gray-300 mb-4 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {project.description}
          </p>

          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-4 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

