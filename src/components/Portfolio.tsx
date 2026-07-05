"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Portfolio.module.css";

const portfolioItems = [
  {
    id: 1,
    title: "Eleganza Bridal Dewy Look",
    category: "Bridal",
    desc: "Soft pink undertone, glowing glass skin & timeless bun hairstyle for Holy Matrimony.",
    image: "/bridal.jpg",
    tag: "Wedding Day",
  },
  {
    id: 2,
    title: "Vogue Editorial Emerald Gaze",
    category: "Editorial",
    desc: "Bold graphic eye makeup with luxury Dior shadow & sculpted glass cheekbones.",
    image: "/editorial.jpg",
    tag: "High Fashion",
  },
  {
    id: 3,
    title: "Golden Hour Luxury Session",
    category: "Bridal",
    desc: "Behind the scenes professional studio styling with warm champagne gold lighting.",
    image: "/hero.jpg",
    tag: "Studio Session",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section" style={{ background: "rgba(20, 16, 20, 0.4)" }}>
      <div className="container">
        <div className={styles.header}>
          <span className="subtitle">MAHA KARYA KAMI</span>
          <h2 className={styles.title}>
            Portofolio <span className="text-gradient">Riasan Mempesona</span>
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Setiap riasan adalah karya seni yang disesuaikan secara unik dengan karakter kepribadian dan struktur wajah klien kami.
          </p>
        </div>

        <div className={styles.filterTabs}>
          {["All", "Bridal", "Editorial"].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeFilter === tab ? styles.activeTab : ""}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab === "All" ? "Semua Karya" : tab}
            </button>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={625}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
