'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export const useNavigation = <T>(items: T[]) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeItem = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);

    setActiveItem((prev) => {
      if (direction === 'next') {
        return prev === items.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? items.length - 1 : prev - 1;
      }
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  useEffect(() => {
    const arrowAnimation = () => {
      gsap.to('.arrow-left', {
        x: -5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      gsap.to('.arrow-right', {
        x: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    };

    arrowAnimation();
  }, []);

  return {
    activeItem,
    isAnimating,
    changeItem,
  };
};

