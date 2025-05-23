'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RefObject } from 'react';

export function useTitleFlicker(ref: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (ref.current) {
        const tl = gsap.timeline();
        tl.set(ref.current, { opacity: 0 });
        tl.to(ref.current, {
          opacity: 1,
          duration: 0.001,
          repeat: 20,
          yoyo: true,
          repeatDelay: 0.01,
          delay: 2,
        });
        tl.to(
          ref.current,
          { opacity: 0, duration: 0.001, yoyo: true },
          '+=0.1'
        );
        tl.to(ref.current, { opacity: 1, duration: 0.001, yoyo: true });
        tl.to(ref.current, { opacity: 0, duration: 0, yoyo: true });
        tl.to(ref.current, { opacity: 1, duration: 2 });
      }
    },
    { scope: ref }
  );
}

