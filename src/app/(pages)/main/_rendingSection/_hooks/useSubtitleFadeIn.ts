'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RefObject } from 'react';

export function useSubtitleFadeIn(ref: RefObject<HTMLSpanElement | null>) {
  useGSAP(
    () => {
      if (ref.current) {
        gsap.set(ref.current, { opacity: 0, y: 20 });
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 2.7,
        });
      }
    },
    { scope: ref }
  );
}

