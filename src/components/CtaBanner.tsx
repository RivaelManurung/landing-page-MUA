import Icon from "./ui/Icon";
import Highlight from "./ui/Highlight";
import styles from "./CtaBanner.module.css";
import type { CtaBannerContent } from "@/lib/types";

interface CtaBannerProps {
  cta: CtaBannerContent;
  bookingHref: string;
}

export default function CtaBanner({ cta, bookingHref }: CtaBannerProps) {
  return (
    <section className={styles.banner} aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`} data-reveal>
        <div>
          <h2 id="cta-heading" className={styles.title}>
            {cta.titleLines.map((line) => (
              <span key={line}>
                {line === cta.highlight || line.includes(cta.highlight) ? (
                  <Highlight text={line} highlight={cta.highlight} />
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
          <p className={styles.description}>{cta.description}</p>
        </div>

        <a
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-whatsapp ${styles.button}`}
        >
          <Icon name="whatsapp" size={20} />
          {cta.buttonLabel}
        </a>
      </div>
    </section>
  );
}
