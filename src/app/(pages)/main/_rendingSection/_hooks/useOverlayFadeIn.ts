'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RefObject } from 'react';

export function useOverlayFadeIn(ref: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (ref.current) {
        gsap.to(ref.current, {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.2,
        });
      }
    },
    { scope: ref }
  );
}

