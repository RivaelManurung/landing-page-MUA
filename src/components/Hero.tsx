import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>✨</span>
            <span>PREMIUM MAKEUP ARTIST & STYLING</span>
          </div>

          <h1 className={styles.title}>
            Pancarkan <span className="text-gradient">Keanggunan Sejati</span> Di Momen Istimewa
          </h1>

          <p className={styles.description}>
            Sentuhan riasan profesional bertaraf mewah oleh Aurelia Glam. 
            Menonjolkan fitur terbaik wajah Anda dengan teknik modern, produk luxury tahan lama, 
            dan hasil akhir yang memukau tanpa terasa berat.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#booking" className="btn btn-primary">
              Konsultasi & Booking
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              Lihat Karya Kami
            </a>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h4 className="text-gradient">500+</h4>
              <p>Pengantin & Klien Puas</p>
            </div>
            <div className={styles.statItem}>
              <h4 className="text-gradient">8+ Thn</h4>
              <p>Pengalaman Profesional</p>
            </div>
            <div className={styles.statItem}>
              <h4 className="text-gradient">100%</h4>
              <p>Luxury Products Only</p>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageContainer}>
            <Image
              src="/hero.jpg"
              alt="Professional Makeup Artist Session"
              width={600}
              height={750}
              className={styles.heroImg}
              priority
            />
          </div>

          <div className={`${styles.floatingCard1} animate-float`}>
            <div style={{ fontSize: "1.5rem" }}>⭐</div>
            <div>
              <div className={styles.cardTitle}>5.0 Rating Sempurna</div>
              <div className={styles.cardSub}>Di Bridestory & Google</div>
            </div>
          </div>

          <div className={`${styles.floatingCard2} animate-float`} style={{ animationDelay: "2.5s" }}>
            <div className={styles.cardTitle}>💄 High-End Cosmetics</div>
            <div className={styles.cardSub}>Dior, Chanel, Charlotte Tilbury</div>
          </div>
        </div>
      </div>
    </section>
  );
}
