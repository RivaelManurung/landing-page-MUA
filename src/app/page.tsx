import AnimationProvider from "@/components/AnimationProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { buildGeneralMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import rawData from "@/data/data.json";
import type { LandingData } from "@/lib/types";

const data = rawData as LandingData;

export default function Home() {
  const bookingHref = buildWhatsAppLink(
    data.site.whatsapp,
    buildGeneralMessage(),
  );

  return (
    <>
      <AnimationProvider />
      <Navbar
        siteName={data.site.name}
        siteTagline={data.site.tagline}
        navItems={data.nav}
        bookingHref={bookingHref}
      />
      <main>
        <Hero hero={data.hero} />
        <About about={data.about} siteName={data.site.name} />
        <Services services={data.services} />
        <Packages packages={data.packages} whatsapp={data.site.whatsapp} />
        <Portfolio portfolio={data.portfolio} />
        <Testimonials testimonials={data.testimonials} />
        <CtaBanner cta={data.cta} bookingHref={bookingHref} />
      </main>
      <Footer site={data.site} footer={data.footer} navItems={data.nav} />
    </>
  );
}
