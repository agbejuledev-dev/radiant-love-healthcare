"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=90",
    alt: "Healthcare professional providing care",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=90",
    alt: "Healthcare professional working with a patient",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=90",
    alt: "Healthcare professional using technology",
  },
];

const AUTOPLAY_DELAY = 5500;

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const timer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion, nextSlide]);

  useEffect(() => {
    const handleVisibilityChange = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) >= 50) distance > 0 ? nextSlide() : previousSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="hero"
      aria-label="Radiant-love Healthcare recruitment"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="heroSlides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div key={slide.src} className={`heroSlide ${index === activeSlide ? "heroSlideActive" : ""}`}>
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="heroImage"
            />
          </div>
        ))}
      </div>

      <div className="heroOverlay" />

      <div key={activeSlide} className="heroText heroTextAnimated">
        <span>Healthcare recruitment &amp; staffing</span>
        <h1>Connecting people with opportunities that matter.</h1>
        <p>Helping healthcare professionals find rewarding roles and organisations find dependable people across the UK.</p>
      </div>

      <button type="button" className="heroArrow left" onClick={previousSlide} aria-label="Previous slide">
        <ChevronLeft size={23} strokeWidth={1.5} />
      </button>
      <button type="button" className="heroArrow right" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={23} strokeWidth={1.5} />
      </button>

      <div className="dots" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === activeSlide ? "dot dotActive" : "dot"}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>

      <div className="heroCurve" aria-hidden="true" />
    </section>
  );
}
