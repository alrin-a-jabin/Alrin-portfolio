"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import styles from "./Experience.module.scss";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Check if experience is current (contains "Present")
  const isCurrent = (duration: string) => duration.toLowerCase().includes("present");

  return (
    <Section id="experience" className={styles.experience}>
      {/* Decorative gradients */}
      <div className={`${styles.decorativeGradient} ${styles.gradient1}`} />
      <div className={`${styles.decorativeGradient} ${styles.gradient2}`} />

      <div className={styles.container}>
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and key accomplishments throughout my career"
          showDivider
        />

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <div className={styles.experienceCard}>
                {/* Timeline Dot */}
                <div className={styles.timelineDot} />

                {/* Colored Bar */}
                <div className={styles.timelineBar} />

                {/* Featured Badge for first item */}
                {index === 0 && (
                  <div className={styles.featuredBadge}>
                    Latest
                  </div>
                )}

                <div className={styles.cardContent}>
                  {/* Header Section */}
                  <div className={styles.header}>
                    <div className={styles.titleSection}>
                      <h3 className={styles.position}>{exp.position}</h3>
                      <div className={styles.company}>
                        <span className={styles.companyIcon}>
                          <Briefcase size={18} />
                        </span>
                        <span className={styles.companyLink}>{exp.company}</span>
                        {isCurrent(exp.duration) && (
                          <span className={styles.currentIndicator}>
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.metaInfo}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>
                          <Calendar size={16} />
                        </span>
                        <span>{exp.duration}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>
                          <MapPin size={16} />
                        </span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={styles.description}>
                    <ul className={styles.descriptionList}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className={styles.descriptionItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className={styles.techBadge}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
