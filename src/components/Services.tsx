import styles from "./Services.module.css";

const services = [
  {
    icon: "👰‍♀️",
    title: "Bridal Luxury Package",
    price: "IDR 4.500.000",
    desc: "Riasan pengantin eksklusif untuk hari pernikahan Anda dengan teknik ketahanan 24 jam dan kilau mewah.",
    features: [
      "Konsultasi & Tes Makeup Sebelum Hari H",
      "Makeup Pengantin (Akad/Holy Matrimony & Resepsi)",
      "Hair Styling / Hijab Do Profesional",
      "Premium False Lashes & Softlens Luxury",
      "Touch-up standby hingga acara selesai",
      "Bonus: Riasan Ibu Pengantin (2 Orang)"
    ],
    featured: true,
  },
  {
    icon: "📸",
    title: "Editorial & Commercial",
    price: "IDR 2.500.000",
    desc: "Riasan berkarakter kuat untuk pemotretan majalah, iklan komersial, fashion show, atau video musik.",
    features: [
      "Konseptualisasi tema dengan Art Director",
      "High-Definition (HD) Makeup untuk Kamera",
      "Body glowing / body painting jika diperlukan",
      "Standby touch-up selama sesi shoot (max 6 jam)",
      "Penggunaan produk berstandar internasional"
    ],
    featured: false,
  },
  {
    icon: "🥂",
    title: "Special Occasion & Party",
    price: "IDR 850.000",
    desc: "Tampil menawan dan mempesona untuk acara wisuda, lamaran (engagement), gala dinner, atau pesta.",
    features: [
      "Flawless Soft Glam atau Bold Makeup",
      "Hair styling sederhana / Hijab styling",
      "Premium bulu mata palsu 3D natural",
      "Produk tahan lama dan anti-luntur",
      "Pengerjaan di studio atau Home Service (+transport)"
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="subtitle">PILIHAN LAYANAN EKSKLUSIF</span>
          <h2 className={styles.title}>
            Paket Riasan <span className="text-gradient">Disesuaikan Untuk Anda</span>
          </h2>
          <p className={styles.subtext}>
            Kami hanya menggunakan produk kosmetik kelas dunia (Dior, Chanel, Charlotte Tilbury, Tom Ford) 
            untuk menjaga kesehatan kulit sekaligus memberikan hasil akhir yang luar biasa.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {services.map((srv, idx) => (
            <div
              key={idx}
              className={`${styles.serviceCard} ${srv.featured ? styles.featured : ""}`}
            >
              {srv.featured && <span className={styles.featuredBadge}>Most Popular</span>}

              <div>
                <div className={styles.iconWrapper}>{srv.icon}</div>
                <h3 className={styles.serviceTitle}>{srv.title}</h3>
                <div className={styles.price}>
                  {srv.price} <span>/ sesi</span>
                </div>
                <p className={styles.serviceDesc}>{srv.desc}</p>

                <ul className={styles.featureList}>
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <span className={styles.check}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <a
                  href="#booking"
                  className={`btn ${srv.featured ? "btn-primary" : "btn-secondary"} ${styles.bookBtn}`}
                >
                  Pilih Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
