import Image from "next/image";
import Icon from "./ui/Icon";
import styles from "./Hero.module.css";
import type { HeroContent } from "@/lib/types";

interface HeroProps {
  hero: HeroContent;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section id="beranda" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className="kicker" data-hero-fade>
            {hero.kicker}
          </span>

          <h1 id="hero-heading" className={styles.title}>
            {hero.titleLines.map((line) => (
              <span key={line} className={styles.lineMask}>
                <span
                  data-hero-line
                  className={
                    line === hero.highlight ? "accent-italic" : undefined
                  }
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className={styles.description} data-hero-fade>
            {hero.description}
          </p>

          <div className={styles.ctas} data-hero-fade>
            <a href={hero.primaryCta.href} className="btn btn-gold">
              {hero.primaryCta.label}
              <Icon name="arrowRight" size={16} />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className={styles.features} data-reveal-group>
            {hero.features.map((feature) => (
              <li key={feature.title}>
                <span className={styles.featureIcon}>
                  <Icon name={feature.icon} size={20} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} data-hero-visual>
          <div className={styles.arch}>
            <Image
              src={hero.image}
              alt="Hasil makeup profesional oleh Lunée"
              width={640}
              height={800}
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 90vw, 45vw"
              className={styles.image}
              data-parallax
            />
          </div>
          <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">
            ✦
          </span>
          <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">
            ✦
          </span>
        </div>
      </div>
    </section>
  );
}
