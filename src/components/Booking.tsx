"use client";

import { useState } from "react";
import styles from "./Booking.module.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Bridal Luxury Package",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Format WhatsApp Message
    const text = `Halo Aurelia Glam! Saya ingin konsultasi & booking layanan MUA:
- Nama: ${formData.name}
- No. WhatsApp: ${formData.phone}
- Layanan: ${formData.service}
- Tanggal Acara: ${formData.date}
- Catatan Tambahan: ${formData.notes}`;
    const waUrl = `https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="booking" className={styles.bookingSection}>
      <div className="container">
        <div className={styles.box}>
          <div>
            <span className="subtitle">JADWALKAN KONSULTASI</span>
            <h2 className={styles.infoTitle}>
              Siap Untuk Tampil <span className="text-gradient">Sempurna</span> Di Hari Istimewa?
            </h2>
            <p className={styles.infoDesc}>
              Jadwal kami sangat terbatas terutama pada akhir pekan dan musim pernikahan. 
              Isi formulir di samping untuk mengecek ketersediaan tanggal acara Anda atau langsung terhubung dengan WhatsApp kami.
            </p>

            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.icon}>📍</div>
                <div>
                  <strong>Studio Resmi:</strong> Jl. Senopati Raya No. 88, Kebayoran Baru, Jakarta Selatan
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.icon}>💬</div>
                <div>
                  <strong>WhatsApp & Reservasi:</strong> +62 812-3456-7890
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <strong>Email Partnership:</strong> hello@aureliaglam.id
                </div>
              </li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMsg}>
                ✓ Formulir berhasil diproses! Menghubungkan ke WhatsApp...
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.label}>Nama Lengkap *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Contoh: Aurelie Hermansyah"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Nomor WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="0812xxxx..."
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Pilih Paket Layanan *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Bridal Luxury Package">Bridal Luxury Package (IDR 4.500.000)</option>
                <option value="Editorial & Commercial">Editorial & Commercial (IDR 2.500.000)</option>
                <option value="Special Occasion & Party">Special Occasion & Party (IDR 850.000)</option>
                <option value="Custom / Private Class">Custom / Private Makeup Class</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Tanggal Rencana Acara *</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Catatan Tambahan (Opsional)</label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Lokasi acara, jam akad/resepsi, atau request khusus..."
                value={formData.notes}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Kirim & Cek Ketersediaan via WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
