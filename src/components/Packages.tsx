import Icon from "./ui/Icon";
import Highlight from "./ui/Highlight";
import CustomPackageForm from "./CustomPackageForm";
import styles from "./Packages.module.css";
import { buildPackageMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import type { PackagesContent } from "@/lib/types";

interface PackagesProps {
  packages: PackagesContent;
  whatsapp: string;
}

export default function Packages({ packages, whatsapp }: PackagesProps) {
  return (
    <section id="paket" className={styles.packages} aria-labelledby="packages-heading">
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className="kicker">{packages.kicker}</span>
          <h2 id="packages-heading">
            <Highlight text={packages.title} highlight={packages.highlight} />
          </h2>
          <p>{packages.description}</p>
        </div>

        <ul className={styles.grid} data-reveal-group>
          {packages.items.map((pkg) => {
            const bookingHref = buildWhatsAppLink(
              whatsapp,
              buildPackageMessage(pkg.name, pkg.priceLabel),
            );

            return (
              <li
                key={pkg.id}
                className={`${styles.card} ${pkg.isFeatured ? styles.featured : ""}`}
              >
                {pkg.badge ? (
                  <span className={styles.badge}>{pkg.badge}</span>
                ) : null}

                <header className={styles.cardHead}>
                  <h3>{pkg.name}</h3>
                  <p className={styles.subtitle}>{pkg.subtitle}</p>
                  <p className={styles.price}>
                    <strong>{pkg.priceLabel}</strong>
                    <span>/ {pkg.unit}</span>
                  </p>
                </header>

                <ul className={styles.features}>
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.bestFor}>{pkg.bestFor}</p>

                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${pkg.isFeatured ? "btn-gold" : "btn-whatsapp"} ${styles.bookBtn}`}
                >
                  <Icon name="whatsapp" size={18} />
                  Booking via WhatsApp
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.customCard} data-reveal>
          <div className={styles.customInfo}>
            <span className="kicker">{packages.custom.subtitle}</span>
            <h3>{packages.custom.name}</h3>
            <p>{packages.custom.description}</p>
            <ul className={styles.customFeatures}>
              {packages.custom.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <CustomPackageForm
            whatsapp={whatsapp}
            eventTypes={packages.custom.eventTypes}
          />
        </div>
      </div>
    </section>
  );
}
