"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=90",
    alt: "Caregiver supporting an older person at home",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=90",
    alt: "Caregiver and older person sharing a warm moment",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=90",
    alt: "Caregiver supporting an older person in the community",
  },
];

const AUTOPLAY_DELAY = 5500;

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  /*
   * Move to the next slide.
   */
  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, []);

  /*
   * Move to the previous slide.
   */
  const previousSlide = useCallback(() => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  }, []);

  /*
   * Detect user's reduced-motion preference.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePreference,
      );
    };
  }, []);

  /*
   * Pause when the browser tab is hidden.
   */
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsHidden(document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  /*
   * Automatic carousel.
   *
   * It intentionally pauses while the user is hovering
   * over the hero and when the browser tab is hidden.
   */
  useEffect(() => {
    if (reducedMotion || isHovered || isHidden) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [isHovered, isHidden, reducedMotion]);

  /*
   * Reset autoplay after manual navigation.
   *
   * Changing activeSlide causes the autoplay effect above
   * to restart its 5.5 second timer.
   */
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  /*
   * Touch/swipe support.
   */
  const handleTouchStart = (
    event: React.TouchEvent<HTMLElement>,
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;

    touchEndX.current = null;
  };

  const handleTouchMove = (
    event: React.TouchEvent<HTMLElement>,
  ) => {
    touchEndX.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    if (Math.abs(distance) >= 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="hero"
      aria-label="Radiant-love Healthcare recruitment"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* =====================================================
          BACKGROUND SLIDES
          ===================================================== */}

      <div
        className="heroSlides"
        aria-hidden="true"
      >
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={slide.src}
              className={`heroSlide ${
                isActive ? "heroSlideActive" : ""
              }`}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                sizes="100vw"
                className="heroImage"
              />
            </div>
          );
        })}
      </div>

      {/* Dark image overlay */}
      <div
        className="heroOverlay"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO TEXT
          ===================================================== */}

      <div
        key={activeSlide}
        className="heroText heroTextAnimated"
      >
        <span>
          Healthcare recruitment &amp; staffing
        </span>

        <h1>
          Connecting people with opportunities that
          matter.
        </h1>

        <p>
          Helping healthcare professionals find
          rewarding roles and organisations find
          dependable people across the UK.
        </p>
      </div>

      {/* =====================================================
          PREVIOUS BUTTON
          ===================================================== */}

      <button
        type="button"
        className="heroArrow left"
        onClick={previousSlide}
        aria-label="Previous hero image"
      >
        <ChevronLeft
          size={23}
          strokeWidth={1.5}
        />
      </button>

      {/* =====================================================
          NEXT BUTTON
          ===================================================== */}

      <button
        type="button"
        className="heroArrow right"
        onClick={nextSlide}
        aria-label="Next hero image"
      >
        <ChevronRight
          size={23}
          strokeWidth={1.5}
        />
      </button>

      {/* =====================================================
          SLIDE INDICATORS
          ===================================================== */}

      <div
        className="dots"
        aria-label="Hero slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={
              index === activeSlide
                ? "dot dotActive"
                : "dot"
            }
            onClick={() => goToSlide(index)}
            aria-label={`Go to hero slide ${index + 1}`}
            aria-current={
              index === activeSlide
                ? "true"
                : undefined
            }
          />
        ))}
      </div>

      {/* Curved bottom edge */}
      <div
        className="heroCurve"
        aria-hidden="true"
      />
    </section>
  );
}