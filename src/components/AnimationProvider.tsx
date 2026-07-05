"use client";

import { useEffect } from "react";
import type { gsap as GsapType } from "gsap";

type MatchMedia = ReturnType<typeof GsapType.matchMedia>;

/**
 * Wires GSAP + ScrollTrigger to declarative data-attributes:
 *
 * - [data-hero-line]   — masked line reveal in the hero timeline
 * - [data-hero-fade]   — staggered fade-up after the headline
 * - [data-hero-visual] — hero image entrance
 * - [data-parallax]    — subtle scroll parallax (yPercent)
 * - [data-reveal]      — fade-up on scroll into view
 * - [data-reveal-group]— children stagger-reveal on scroll
 * - [data-counter]     — count-up for stat values like "200+" / "5.0"
 *
 * GSAP is dynamically imported so it stays out of the initial bundle,
 * and every animation lives behind prefers-reduced-motion: no-preference.
 */
export default function AnimationProvider() {
  useEffect(() => {
    let matchMedia: MatchMedia | undefined;
    let isCancelled = false;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (isCancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "power3.out";

        /* Hero entrance timeline */
        const heroTl = gsap.timeline({ defaults: { ease } });
        heroTl
          .from("[data-hero-line]", {
            yPercent: 115,
            duration: 1.1,
            stagger: 0.14,
          })
          .from(
            "[data-hero-fade]",
            { y: 28, autoAlpha: 0, duration: 0.8, stagger: 0.12 },
            "-=0.6",
          )
          .from(
            "[data-hero-visual]",
            { scale: 0.94, autoAlpha: 0, duration: 1.2, ease: "power2.out" },
            0.25,
          );

        /* Scroll reveals */
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 40,
            autoAlpha: 0,
            duration: 0.9,
            ease,
            scrollTrigger: { trigger: el, start: "top 86%" },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          gsap.from(group.children, {
            y: 44,
            autoAlpha: 0,
            duration: 0.85,
            ease,
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 84%" },
          });
        });

        /* Parallax (compositor-only: transform) */
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          // slight scale prevents edge gaps while the image travels
          gsap.fromTo(
            el,
            { yPercent: -6, scale: 1.14 },
            {
              yPercent: 6,
              scale: 1.14,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        });

        /* Stat counters — parse "200+", "5.0", "100%" */
        gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
          const original = el.textContent ?? "";
          const match = original.match(/^([\d.]+)(.*)$/);
          if (!match) return;

          const target = parseFloat(match[1]);
          const suffix = match[2];
          const decimals = match[1].includes(".") ? 1 : 0;
          const state = { value: 0 };

          gsap.to(state, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
            onUpdate: () => {
              el.textContent = `${state.value.toFixed(decimals)}${suffix}`;
            },
          });
        });
      });
    };

    void init();

    return () => {
      isCancelled = true;
      matchMedia?.revert();
    };
  }, []);

  return null;
}
