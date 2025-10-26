"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingTopNav from "@/components/FloatingTopNav";
import JourneyTimeline from "@/components/JourneyTimeline";
import AlternatingBusinessSection from "@/components/sections/AlternatingBusinessSection";
import AlternatingProjectsSection from "@/components/sections/AlternatingProjectsSection";
import AlternatingLeadershipSection from "@/components/sections/AlternatingLeadershipSection";

export default function Home() {
  return (
    <div className="relative">
      <FloatingTopNav />

      {/* Hero Section with Timeline */}
      <section className="relative min-h-screen pt-32 px-6 lg:px-12 overflow-hidden">
        {/* Background Portrait */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[50%] pointer-events-none">
          <div className="relative w-full h-full opacity-15 dark:opacity-8">
            <Image
              src="/images/jordan-portrait.png"
              alt=""
              fill
              className="object-contain object-right"
              style={{ objectPosition: 'right center' }}
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left - Name & Intro */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-wide">
                  Jordan{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    Oiknine
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-light mb-8">
                  What&apos;s up, everyone! I&apos;m a senior at Ladue High School who loves 
                  building and creating. This is my space to share some of the projects I&apos;ve 
                  been working on and the things I&apos;ve been learning along the way. No fancy 
                  portfolio—just a window into what I care about and the journey so far.
                </p>

                {/* Social Links */}
                <motion.div
                  className="flex flex-wrap items-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Instagram →
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Resume →
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Journey Timeline */}
            <div className="lg:col-span-6">
              <JourneyTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with Alternating Layouts */}
      <div className="relative mt-24">
        <AlternatingBusinessSection />
        <AlternatingProjectsSection />
        <AlternatingLeadershipSection />
      </div>
    </div>
  );
}
