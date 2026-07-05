import Icon from "./ui/Icon";
import Highlight from "./ui/Highlight";
import styles from "./Services.module.css";
import type { ServicesContent } from "@/lib/types";

interface ServicesProps {
  services: ServicesContent;
}

export default function Services({ services }: ServicesProps) {
  return (
    <section
      id="layanan"
      className={styles.services}
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <span className="kicker">{services.kicker}</span>
            <h2 id="services-heading">
              <Highlight text={services.title} highlight={services.highlight} />
            </h2>
          </div>
          <a href={services.cta.href} className="btn btn-outline">
            {services.cta.label}
            <Icon name="arrowRight" size={16} />
          </a>
        </div>

        <ul className={styles.grid} data-reveal-group>
          {services.items.map((service) => (
            <li key={service.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={service.icon} size={24} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.startingPrice}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
