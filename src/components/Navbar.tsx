"use client";

import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import styles from "./Navbar.module.css";
import type { NavItem } from "@/lib/types";

interface NavbarProps {
  siteName: string;
  siteTagline: string;
  navItems: NavItem[];
  bookingHref: string;
}

export default function Navbar({
  siteName,
  siteTagline,
  navItems,
  bookingHref,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#beranda" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandMark} aria-hidden="true">
            {siteName.charAt(0)}
          </span>
          <span className={styles.brandText}>
            <strong>{siteName}</strong>
            <small>{siteTagline}</small>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-dark ${styles.mobileCta}`}
            onClick={closeMenu}
          >
            Book Now
            <Icon name="arrowRight" size={16} />
          </a>
        </nav>

        <div className={styles.actions}>
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-dark ${styles.desktopCta}`}
          >
            Book Now
            <Icon name="arrowRight" size={16} />
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
