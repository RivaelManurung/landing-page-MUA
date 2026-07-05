"use client";

import { useState, type FormEvent } from "react";
import Icon from "./ui/Icon";
import styles from "./CustomPackageForm.module.css";
import { buildCustomMessage, buildWhatsAppLink } from "@/lib/whatsapp";

interface CustomPackageFormProps {
  whatsapp: string;
  eventTypes: string[];
}

interface FormErrors {
  name?: string;
  eventDate?: string;
  location?: string;
}

const MAX_NOTES_LENGTH = 500;

export default function CustomPackageForm({
  whatsapp,
  eventTypes,
}: CustomPackageFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const eventType = String(formData.get("eventType") ?? eventTypes[0]);
    const eventDate = String(formData.get("eventDate") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").slice(0, MAX_NOTES_LENGTH);

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Nama wajib diisi";
    if (!eventDate) nextErrors.eventDate = "Tanggal acara wajib diisi";
    if (!location) nextErrors.location = "Lokasi wajib diisi";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const link = buildWhatsAppLink(
      whatsapp,
      buildCustomMessage({ name, eventType, eventDate, location, notes }),
    );
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="custom-name">Nama</label>
          <input
            id="custom-name"
            name="name"
            type="text"
            placeholder="Nama kamu"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "custom-name-error" : undefined}
          />
          {errors.name ? (
            <p id="custom-name-error" role="alert" className={styles.error}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="custom-event-type">Jenis Acara</label>
          <select id="custom-event-type" name="eventType" defaultValue={eventTypes[0]}>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="custom-event-date">Tanggal Acara</label>
          <input
            id="custom-event-date"
            name="eventDate"
            type="date"
            aria-invalid={Boolean(errors.eventDate)}
            aria-describedby={errors.eventDate ? "custom-date-error" : undefined}
          />
          {errors.eventDate ? (
            <p id="custom-date-error" role="alert" className={styles.error}>
              {errors.eventDate}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="custom-location">Lokasi</label>
          <input
            id="custom-location"
            name="location"
            type="text"
            placeholder="Kota / alamat acara"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "custom-location-error" : undefined}
          />
          {errors.location ? (
            <p id="custom-location-error" role="alert" className={styles.error}>
              {errors.location}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="custom-notes">Kebutuhan Khusus (opsional)</label>
        <textarea
          id="custom-notes"
          name="notes"
          rows={3}
          maxLength={MAX_NOTES_LENGTH}
          placeholder="Contoh: makeup untuk 5 bridesmaid + 2 ibu, acara di luar kota"
        />
      </div>

      <button type="submit" className="btn btn-whatsapp">
        <Icon name="whatsapp" size={18} />
        Konsultasi via WhatsApp
      </button>
      <p className={styles.hint}>
        Form ini akan membuka WhatsApp dengan pesan yang sudah terisi otomatis.
      </p>
    </form>
  );
}
