"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import styles from "./Footer.module.scss";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandSection}>
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.socialSection}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              {personalInfo.socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return Icon ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © {currentYear} {personalInfo.name}. Built with
            <Heart size={16} className={styles.heartIcon} />
            using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
