export interface CtaLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  url: string;
  location: string;
  whatsapp: string;
  email: string;
  phone: string;
  socials: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroFeature {
  icon: string;
  title: string;
  description: string;
}

export interface HeroContent {
  kicker: string;
  titleLines: string[];
  highlight: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  image: string;
  features: HeroFeature[];
}

export interface AboutStat {
  icon: string;
  value: string;
  label: string;
}

export interface AboutContent {
  kicker: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  experienceYears: string;
  experienceLabel: string;
  cta: CtaLink;
  stats: AboutStat[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  startingPrice: string;
}

export interface ServicesContent {
  kicker: string;
  title: string;
  highlight: string;
  cta: CtaLink;
  items: ServiceItem[];
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  unit: string;
  isFeatured: boolean;
  badge?: string;
  features: string[];
  bestFor: string;
}

export interface CustomPackage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  eventTypes: string[];
}

export interface PackagesContent {
  kicker: string;
  title: string;
  highlight: string;
  description: string;
  items: PackageItem[];
  custom: CustomPackage;
}

export interface PortfolioItem {
  image: string;
  alt: string;
  category: string;
}

export interface PortfolioContent {
  kicker: string;
  title: string;
  cta: CtaLink;
  items: PortfolioItem[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsContent {
  kicker: string;
  title: string;
  items: TestimonialItem[];
}

export interface CtaBannerContent {
  titleLines: string[];
  highlight: string;
  description: string;
  buttonLabel: string;
}

export interface FooterContent {
  description: string;
  menuTitle: string;
  contactTitle: string;
  followTitle: string;
  copyright: string;
}

export interface LandingData {
  site: SiteInfo;
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  packages: PackagesContent;
  portfolio: PortfolioContent;
  testimonials: TestimonialsContent;
  cta: CtaBannerContent;
  footer: FooterContent;
}
