"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

export const useNeonMenuEffect = (
  menuItemRefs: RefObject<(HTMLElement | null)[]>,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!menuItemRefs.current || menuItemRefs.current.length === 0) return;

    const menuItems = menuItemRefs.current.filter(Boolean) as HTMLElement[];

    if (!isOpen) {
      menuItems.forEach((item, index) => {
        const reverseIndex = menuItems.length - 1 - index;
        gsap.to(item, {
          opacity: 0,
          textShadow: "0 0 0px rgba(255,255,255,0), 0 0 0px rgba(0,102,255,0)",
          color: "transparent",
          duration: 0.2,
          delay: reverseIndex * 0.05,
          ease: "power1.out",
        });
      });

      return;
    }

    menuItems.forEach((item, index) => {
      gsap.set(item, {
        opacity: 0,
        textShadow: "0 0 0px rgba(255,255,255,0), 0 0 0px rgba(0,102,255,0)",
        color: "#333333",
      });

      const timeline = gsap.timeline({ delay: index * 0.15 });

      timeline.to(item, {
        opacity: 0.3,
        color: "#7788bb",
        textShadow:
          "0 0 2px rgba(255,255,255,0.2), 0 0 4px rgba(0,102,255,0.1)",
        duration: 0.2,
        ease: "power1.in",
      });

      timeline.to(item, {
        opacity: 0.1,
        textShadow:
          "0 0 1px rgba(255,255,255,0.1), 0 0 2px rgba(0,102,255,0.1)",
        duration: 0.1,
        ease: "power1.inOut",
      });

      timeline.to(item, {
        opacity: 0.5,
        color: "#aabbff",
        textShadow:
          "0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(0,102,255,0.3)",
        duration: 0.1,
        ease: "power1.inOut",
      });

      timeline.to(item, {
        opacity: 0.2,
        textShadow:
          "0 0 3px rgba(255,255,255,0.2), 0 0 6px rgba(0,102,255,0.2)",
        duration: 0.1,
        ease: "power1.inOut",
      });

      timeline.to(item, {
        opacity: 1,
        color: "#ffffff",
        textShadow: "0 0 21px #fff, 0 0 42px #0066ff, 0 0 80px #0066ff",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      menuItems.forEach((item) => {
        gsap.killTweensOf(item);
      });
    };
  }, [menuItemRefs, isOpen]);
};
