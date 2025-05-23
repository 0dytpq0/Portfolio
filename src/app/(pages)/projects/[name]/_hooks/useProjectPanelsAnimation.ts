'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useProjectPanelsAnimation(projectIdx: number) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set('.sub-panel', { y: '100%', opacity: 0 });
      const panels = gsap.utils.toArray<HTMLElement>('.sub-panel');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.panels-container',
          start: 'top top',
          end: () => `+=${(panels.length + 0.5) * 100}%`,
          toggleActions: 'play none none none',
          pin: true,
          pinSpacing: true,
          scrub: 3,
        },
      });
      panels.forEach((panel) => {
        tl.to(panel, {
          y: 0,
          opacity: 1,
          duration: 1,
        });
      });
      const targetY = window.innerHeight * projectIdx;
      gsap.to(window, {
        duration: 1.5 * projectIdx,
        scrollTo: targetY,
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}
