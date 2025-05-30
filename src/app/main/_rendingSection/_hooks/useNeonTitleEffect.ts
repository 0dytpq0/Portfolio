'use client';

import { RefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface NeonEffectOptions {
  dimDuration?: number;
  brightDuration?: number;
  pauseBetweenFlashes?: number;
  pauseBetweenCycles?: number;
  sDelay?: number;
  pDelay?: number;
}

export const useNeonTitleEffect = (
  sElementRef: RefObject<HTMLSpanElement | null>,
  pElementRef: RefObject<HTMLSpanElement | null>,
  options: NeonEffectOptions = {}
) => {
  useGSAP(() => {
    if (!sElementRef.current || !pElementRef.current) return;

    const sElement = sElementRef.current;
    const pElement = pElementRef.current;

    const {
      dimDuration = 0.05,
      brightDuration = 0.02,
      pauseBetweenFlashes = 0.1,
      pauseBetweenCycles = 2.5,
      sDelay = 1,
      pDelay = 2.5,
    } = options;

    gsap.set([sElement, pElement], {
      textShadow: '0 0 21px #fff, 0 0 42px #0066ff',
      color: '#ffffff',
    });

    const createLetterFlicker = (element: HTMLElement, delay = 0) => {
      const timeline = gsap.timeline({
        delay: delay,
        onComplete: () => {
          gsap.delayedCall(pauseBetweenCycles, () =>
            createLetterFlicker(element, 0)
          );
        },
      });

      timeline.to(element, {
        opacity: 0.2,
        textShadow:
          '0 0 1px rgba(255,255,255,0.3), 0 0 2px rgba(0,102,255,0.2)',
        color: '#8899cc',
        duration: dimDuration,
        ease: 'power2.in',
      });

      timeline.to(element, {
        opacity: 0.9,
        textShadow: '0 0 21px #fff, 0 0 42px #0066ff',
        color: '#ffffff',
        duration: brightDuration,
        ease: 'power2.out',
      });

      timeline.to(element, {
        duration: pauseBetweenFlashes,
      });

      timeline.to(element, {
        opacity: 0.1,
        textShadow:
          '0 0 1px rgba(255,255,255,0.2), 0 0 2px rgba(0,102,255,0.1)',
        color: '#7788bb',
        duration: dimDuration,
        ease: 'power2.in',
      });

      timeline.to(element, {
        opacity: 0.9,
        textShadow: '0 0 21px #fff, 0 0 42px #0066ff, 0 0 120px #0066ff',
        color: '#ffffff',
        duration: brightDuration,
        ease: 'power2.out',
      });

      return timeline;
    };

    createLetterFlicker(sElement, sDelay);
    createLetterFlicker(pElement, pDelay);
  }, [sElementRef, pElementRef, options]);
};

