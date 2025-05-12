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
  leftBoxRef: RefObject<HTMLDivElement | null>;
  rightBoxRef: RefObject<HTMLDivElement | null>;
}

export const useMoreSectionAnimation = ({
  sectionRef,
  titleRef,
  leftBoxRef,
  rightBoxRef,
}: MoreSectionRefs) => {
  useEffect(() => {
    const titleElement = titleRef.current;
    const leftBoxElement = leftBoxRef.current;
    const rightBoxElement = rightBoxRef.current;
    const sectionElement = sectionRef.current;

    const runAnimation = () => {
      if (!titleElement || !leftBoxElement || !rightBoxElement) return;

      const animateBoxes = () => {
        const boxes = [leftBoxElement, rightBoxElement];

        // 초기 상태 설정 - 박스들이 위에서 시작
        gsap.set(boxes, {
          y: -40,
          opacity: 0,
          rotation: 0,
        });

        const tl = gsap.timeline();

        tl.to(boxes, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
        });

        boxes.forEach((box, index) => {
          gsap.to(box, {
            rotation: index === 0 ? 1 : -1,
            duration: 0.2,
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          });
        });
      };

      const splitText = SplitText.create(titleElement, { type: 'words,chars' });

      gsap.from(splitText.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: 'power3.out',
        onComplete: animateBoxes,
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
      if (leftBoxElement && rightBoxElement) {
        gsap.killTweensOf([leftBoxElement, rightBoxElement]);
      }
    };
  }, [sectionRef, titleRef, leftBoxRef, rightBoxRef]);
};
