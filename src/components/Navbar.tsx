"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span>AURELIA</span>
          <span className={styles.logoAccent}>GLAM</span>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="#services" className={styles.navLink}>
              Layanan
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className={styles.navLink}>
              Portofolio
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              Tentang
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className={styles.navLink}>
              Testimoni
            </Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <a href="#booking" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>
            Booking Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
