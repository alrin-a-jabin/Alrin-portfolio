"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import styles from "./Projects.module.scss";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="projects" className={styles.projectsSection}>
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of my recent work and side projects"
      />

      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <div className={styles.projectCard}>
              {/* Project Image */}
              <div className={styles.projectImage}>
                {/* Placeholder - Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Info */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techBadge}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.projectActions}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.outline}`}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.primary}`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
