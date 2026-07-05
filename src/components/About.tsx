import Image from "next/image";
import Icon from "./ui/Icon";
import Highlight from "./ui/Highlight";
import styles from "./About.module.css";
import type { AboutContent } from "@/lib/types";

interface AboutProps {
  about: AboutContent;
  siteName: string;
}

export default function About({ about, siteName }: AboutProps) {
  return (
    <section id="tentang" className={styles.about} aria-labelledby="about-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual} data-reveal>
          <div className={styles.frame}>
            <Image
              src={about.image}
              alt={`${siteName} sedang merias klien`}
              width={560}
              height={640}
              sizes="(max-width: 900px) 90vw, 40vw"
              className={styles.image}
            />
          </div>
          <div className={styles.experienceBadge}>
            <strong>{about.experienceYears}</strong>
            <span>{about.experienceLabel}</span>
          </div>
        </div>

        <div className={styles.content} data-reveal>
          <span className="kicker">{about.kicker}</span>
          <h2 id="about-heading">
            <Highlight text={about.title} highlight={about.highlight} />
          </h2>
          <p className={styles.description}>{about.description}</p>
          <p className={styles.signature} aria-hidden="true">
            {siteName}
          </p>
          <a href={about.cta.href} className="btn btn-outline">
            {about.cta.label}
            <Icon name="arrowRight" size={16} />
          </a>
        </div>

        <ul className={styles.stats} data-reveal-group>
          {about.stats.map((stat) => (
            <li key={stat.label}>
              <span className={styles.statIcon}>
                <Icon name={stat.icon} size={22} />
              </span>
              <div>
                <strong data-counter>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
