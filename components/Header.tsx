"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./Header.module.scss";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        styles.header,
        isScrolled ? styles.scrolled : styles.top
      )}
    >
      {/* Top accent line with gradient animation */}
      <div className={cn(
        styles.accentLine,
        isScrolled && styles.visible
      )} />

      <nav className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            className={styles.logo}
          >
            <span className={styles.logoText}>
              Portfolio
            </span>
            {/* Animated underline */}
            <span className={styles.logoUnderline} />
          </Link>

          {/* Desktop Navigation */}
          <ul className={cn(styles.navContainer, "hidden md:flex")}>
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    styles.navItem,
                    activeSection === link.href && styles.active
                  )}
                >
                  <span className={styles.navLabel}>{link.label}</span>
                  <span className={styles.navUnderline} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            styles.mobileNav,
            isMobileMenuOpen ? styles.open : styles.closed
          )}
        >
          <div className={styles.mobileNavContainer}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link, index) => (
                <li 
                  key={link.href}
                  className={cn(
                    styles.mobileNavItem,
                    isMobileMenuOpen && styles.visible
                  )}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : '0ms'
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      styles.mobileNavLink,
                      activeSection === link.href && styles.active
                    )}
                  >
                    <span className={styles.mobileNavContent}>
                      <span>{link.label}</span>
                      {activeSection === link.href ? (
                        <span className={styles.statusDot} />
                      ) : (
                        <span className={cn(styles.statusDot, styles.inactive)} />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
