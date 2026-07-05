import styles from "./Testimonials.module.css";
import type { TestimonialsContent } from "@/lib/types";

interface TestimonialsProps {
  testimonials: TestimonialsContent;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      id="testimoni"
      className={styles.testimonials}
      aria-labelledby="testimonials-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro} data-reveal>
          <span className="kicker">{testimonials.kicker}</span>
          <h2 id="testimonials-heading">{testimonials.title}</h2>
        </div>

        <ul className={styles.list} data-reveal-group>
          {testimonials.items.map((item) => (
            <li key={item.name} className={styles.card}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <footer className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {getInitials(item.name)}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
