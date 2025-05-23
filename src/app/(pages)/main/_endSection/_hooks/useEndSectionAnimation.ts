'use client';

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

interface MoreSectionRefs {
  sectionRef: RefObject<HTMLElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
}

export const useEndSectionAnimation = ({
  sectionRef,
  titleRef,
}: MoreSectionRefs) => {
  useEffect(() => {
    const titleElement = titleRef.current;
    const sectionElement = sectionRef.current;

    const runAnimation = () => {
      if (!titleElement) return;

      const splitText = SplitText.create(titleElement, { type: 'words,chars' });

      gsap.from(splitText.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: 'power3.out',
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      observer.disconnect();

      gsap.killTweensOf(titleElement);
    };
  }, [sectionRef, titleRef]);
};
