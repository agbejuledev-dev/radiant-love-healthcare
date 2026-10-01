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
    src: "/radiant-header.jpg",
    alt: "Healthcare professional in blue scrubs supporting an older person",
  },
  {
    src: "https://images.unsplash.com/photo-1756312177216-f41bb3ac7205?auto=format&fit=crop&w=1800&q=90",
    alt: "Older person smiling at home",
  },
  {
    src: "https://images.unsplash.com/photo-1773227059881-ef8ecf22aac8?auto=format&fit=crop&w=1800&q=90",
    alt: "Older people sharing conversation and connection",
  },
  {
    src: "https://images.unsplash.com/photo-1773227060446-93239a553f1f?auto=format&fit=crop&w=1800&q=90",
    alt: "Caregiver and older people enjoying a community setting",
  },
];

const AUTOPLAY_DELAY = 3000;

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
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
   * It pauses only when the browser tab is hidden.
   */
  useEffect(() => {
    if (reducedMotion || isHidden) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [isHidden, reducedMotion]);

  /*
   * Reset autoplay after manual navigation.
   *
   * Changing activeSlide causes the autoplay effect above
   * to restart its 3 second timer.
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