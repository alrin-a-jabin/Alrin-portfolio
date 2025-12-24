"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  variant?: "default" | "minimal" | "bold" | "elegant";
  showDivider?: boolean;
  showDots?: boolean;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  badge,
  className,
  variant = "default",
  showDivider = true,
  showDots = false,
}: SectionHeadingProps) {
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
    <motion.div
      className={cn(styles.sectionHeading, styles[`variant-${variant}`], className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {badge && (
        <motion.span variants={itemVariants} className={styles.badge}>
          {badge}
        </motion.span>
      )}

      <motion.h2 variants={itemVariants} className={styles.title}>
        {title}
      </motion.h2>

      {showDivider && (
        <motion.div variants={itemVariants} className={styles.divider} />
      )}

      {showDots && (
        <motion.div variants={itemVariants} className={styles.centerDecoration}>
          <span className={`${styles.dot} ${styles.primary}`} />
          <span className={`${styles.dot} ${styles.secondary}`} />
          <span className={`${styles.dot} ${styles.accent}`} />
        </motion.div>
      )}

      {subtitle && (
        <motion.p variants={itemVariants} className={styles.subtitle}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
