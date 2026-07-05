import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Clarissa Putri",
    role: "Bride (Wedding di Hotel Mulia)",
    avatar: "CP",
    comment:
      "“Benar-benar ajaib! Makeup pernikahan saya bertahan dari jam 5 pagi sampai jam 10 malam tanpa crack sedikitpun meskipun banyak menangis haru. Semua tamu memuji keanggunan riasannya!”",
    stars: "★★★★★",
  },
  {
    name: "Nabila Syakieb",
    role: "Fashion Model & Influencer",
    avatar: "NS",
    comment:
      "“Aurelia sangat memahami karakter tulang wajahku. Untuk pemotretan editorial kemarin, hasil kameranya flawless banget, bahkan fotografer bilang hampir tidak perlu edit retouch lagi!”",
    stars: "★★★★★",
  },
  {
    name: "Dr. Alika Maharani",
    role: "Klien Engagement (Lamaran)",
    avatar: "AM",
    comment:
      "“Sangaaat suka dengan teknik soft glam-nya! Kulitku sensitif tapi produk yang dipakai semuanya high-end jadi tidak ada breakout sama sekali setelah acara. Sangat profesional dan tepat waktu.”",
    stars: "★★★★★",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="subtitle">TESTIMONI KLIEN</span>
          <h2 className={styles.title}>
            Kata Mereka Yang Telah <span className="text-gradient">Mempesona</span>
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Kepuasan dan kebahagiaan klien di hari terpenting mereka adalah penghargaan tertinggi bagi kami.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              <div>
                <div className={styles.stars}>{rev.stars}</div>
                <p className={styles.comment}>{rev.comment}</p>
              </div>

              <div className={styles.client}>
                <div className={styles.avatar}>{rev.avatar}</div>
                <div>
                  <div className={styles.clientName}>{rev.name}</div>
                  <div className={styles.clientRole}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
