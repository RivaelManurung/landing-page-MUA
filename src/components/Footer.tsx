import styles from "./Footer.module.css";
import type { FooterContent, NavItem, SiteInfo } from "@/lib/types";

interface FooterProps {
  site: SiteInfo;
  footer: FooterContent;
  navItems: NavItem[];
}

export default function Footer({ site, footer, navItems }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              {site.name.charAt(0)}
            </span>
            <span>
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </span>
          </p>
          <p className={styles.description}>{footer.description}</p>
        </div>

        <nav aria-label="Menu footer">
          <h3>{footer.menuTitle}</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>{footer.contactTitle}</h3>
          <ul>
            <li>
              <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>

        <div>
          <h3>{footer.followTitle}</h3>
          <ul>
            {site.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            &copy; {year} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
