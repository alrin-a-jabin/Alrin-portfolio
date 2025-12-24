"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/portfolio";
import styles from "./About.module.scss";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Section id="about" className={styles.about}>
      {/* Decorative Elements */}
      <div className={`${styles.decorativeElement} ${styles.element1}`} />
      <div className={`${styles.decorativeElement} ${styles.element2}`} />

      <div className={styles.container}>
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about who I am, what I do, and what drives my passion"
        />

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Image/Info */}
          <motion.div variants={itemVariants} className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.avatarBox}>
                {/* Placeholder for avatar - replace with actual image */}
                <div className={styles.avatarPlaceholder}>
                  {personalInfo.name.charAt(0)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div variants={itemVariants} className={styles.contentColumn}>
            <div className={styles.titleSection}>
              <h3>{personalInfo.title}</h3>
            </div>

            <div>
              <p className={`${styles.bioText} ${styles.primary}`}>
                {personalInfo.bio}
              </p>

              <div className={styles.highlightBox}>
                <p>
                  I specialize in building exceptional digital experiences with a focus on
                  performance, accessibility, and user experience. My passion lies in solving
                  complex problems and creating elegant solutions that make a difference.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
