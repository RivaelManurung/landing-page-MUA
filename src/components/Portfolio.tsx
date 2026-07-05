import Image from "next/image";
import Icon from "./ui/Icon";
import styles from "./Portfolio.module.css";
import type { PortfolioContent } from "@/lib/types";

interface PortfolioProps {
  portfolio: PortfolioContent;
}

export default function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <section
      id="portfolio"
      className={styles.portfolio}
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <span className="kicker">{portfolio.kicker}</span>
            <h2 id="portfolio-heading">{portfolio.title}</h2>
          </div>
          <a href={portfolio.cta.href} className="btn btn-outline">
            {portfolio.cta.label}
            <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>

      <div className={styles.trackWrapper}>
        <ul
          className={styles.track}
          aria-label="Galeri hasil makeup"
          data-reveal-group
        >
          {portfolio.items.map((item, index) => (
            <li key={`${item.image}-${index}`} className={styles.item}>
              <Image
                src={item.image}
                alt={item.alt}
                width={360}
                height={460}
                loading="lazy"
                sizes="(max-width: 640px) 70vw, 300px"
                className={styles.image}
              />
              <span className={styles.category}>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
