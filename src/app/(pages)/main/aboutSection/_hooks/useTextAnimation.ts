"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

interface TextAnimationOptions {
  delay?: number;
  staggerDelay?: number;
  textSpeed?: number;
  threshold?: number;
}

export function useTextAnimation(options: TextAnimationOptions = {}) {
  const {
    delay = 0.5,
    staggerDelay = 0.4,
    textSpeed = 0.03,
    threshold = 0.3,
  } = options;

  const grayTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const whiteTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const setGrayTextRef =
    (index: number) => (el: HTMLParagraphElement | null) => {
      grayTextRefs.current[index] = el;
    };

  const setWhiteTextRef =
    (index: number) => (el: HTMLParagraphElement | null) => {
      whiteTextRefs.current[index] = el;
    };

  useEffect(() => {
    const animateText = () => {
      const grayElements = grayTextRefs.current.filter(Boolean);
      const whiteElements = whiteTextRefs.current.filter(Boolean);

      const tl = gsap.timeline({ delay });

      grayElements.forEach((grayElement, index) => {
        const whiteElement = whiteElements[index];
        if (!grayElement || !whiteElement) return;

        const originalText = grayElement.textContent || "";

        gsap.set(grayElement, {
          text: "",
          opacity: 1,
        });

        gsap.set(whiteElement, {
          text: "",
          opacity: 0,
        });

        tl.to(grayElement, {
          duration: originalText.length * textSpeed,
          text: originalText,
          ease: "none",
          delay: index * staggerDelay,
        });

        tl.to(
          whiteElement,
          {
            duration: originalText.length * textSpeed,
            text: originalText,
            opacity: 1,
            ease: "none",
          },
          "-=" + originalText.length * (textSpeed - 0.01)
        ); // 회색 타이핑이 거의 끝날 무렵 시작
      });
    };

    // 인터섹션 옵저버 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText();
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    // 섹션 관찰 시작
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay, staggerDelay, textSpeed, threshold]);

  return {
    containerRef,
    setGrayTextRef,
    setWhiteTextRef,
  };
}
