"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import styles from "./Skills.module.scss";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench,
  type LucideIcon 
} from "lucide-react";

// Icon mapping for skill categories
const categoryIcons: Record<string, LucideIcon> = {
  "Frontend": Code2,
  "Backend": Server,
  "Database": Database,
  "DevOps & Cloud": Cloud,
  "Tools & Others": Wrench,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  const skillBadgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    }),
  };

  return (
    <Section id="skills" className={styles.skillsSection}>
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with"
        badge="Expertise"
        variant="elegant"
        showDivider
      />

      <motion.div
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((skillCategory, categoryIndex) => {
          const IconComponent = categoryIcons[skillCategory.category] || Code2;
          
          return (
            <motion.div 
              key={skillCategory.category} 
              className={styles.skillCard}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <IconComponent size={28} strokeWidth={2.5} />
                </div>
                <h3 className={styles.categoryTitle}>
                  {skillCategory.category}
                </h3>
                <span className={styles.skillCount}>
                  {skillCategory.items.length}
                </span>
              </div>

              <motion.div 
                className={styles.skillsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    custom={index}
                    variants={skillBadgeVariants}
                    className={styles.skillBadge}
                  >
                    <span>{skill}</span>
                    <div className={styles.skillLevel}></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
