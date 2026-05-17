"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const heroImgWrap = document.querySelector<HTMLElement>(".hero-img-wrap");
    const heroContent = document.querySelector<HTMLElement>(".hero-content");

    // Mouse position for parallax (normalized -1 to 1)
    let mx = 0;
    let my = 0;
    // Smoothed values
    let sx = 0;
    let sy = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Smooth parallax animation loop
    let rafId: number;
    const animate = () => {
      // Lerp towards mouse
      sx += (mx - sx) * 0.04;
      sy += (my - sy) * 0.04;

      if (heroImgWrap && window.scrollY < window.innerHeight) {
        const scrollY = window.scrollY * 0.3;
        const px = sx * -15;
        const py = sy * -10 + scrollY;
        heroImgWrap.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onScroll = () => {
      const y = window.scrollY;

      // Nav: transition when leaving hero section
      const heroEl = document.getElementById("hero");
      const heroBottom = heroEl ? heroEl.offsetHeight - 100 : 600;
      if (nav) {
        nav.classList.toggle("scrolled", y > heroBottom);
      }

      // Hero content fade out on scroll
      if (heroContent && y < window.innerHeight) {
        const opacity = 1 - y / (window.innerHeight * 0.5);
        const translate = y * 0.2;
        heroContent.style.opacity = String(Math.max(0, opacity));
        heroContent.style.transform = `translateY(-${translate}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal on scroll
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "-40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
