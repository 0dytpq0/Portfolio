"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UseMediaAnimationOptions {
  duration?: number;
  pause?: number;
}

export const useMediaAnimation = (
  itemsLength: number,
  options: UseMediaAnimationOptions = {}
) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageContainerRef.current) return;

    const targets = imageContainerRef.current.querySelectorAll(
      ".project-image-item"
    );
    const numberOfTargets = targets.length;

    const duration = options.duration || 1.5;
    const pause = options.pause || 2;

    const stagger = duration + pause;
    const repeatDelay = stagger * (numberOfTargets - 1) + pause;

    gsap.set(imageContainerRef.current, { autoAlpha: 1 });

    const animation = gsap.timeline({});

    animation
      .fromTo(
        targets,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
          },
        }
      )
      .to(
        targets,
        {
          opacity: 0,
          scale: 0.9,
          duration: duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
          },
        },
        stagger
      );

    animation.pause(duration);
    gsap.delayedCall(0.5, () => animation.play());

    return () => {
      animation.kill();
    };
  }, [imageContainerRef, itemsLength, options.duration, options.pause]);
  return { imageContainerRef };
};
