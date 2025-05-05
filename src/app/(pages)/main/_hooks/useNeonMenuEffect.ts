"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

/**
 * 네온 메뉴 애니메이션을 위한 커스텀 훅
 * 메뉴가 열릴 때 아이템들이 순차적으로 불이 켜지는 효과 적용
 */
export const useNeonMenuEffect = (
  menuItemRefs: RefObject<(HTMLElement | null)[]>,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!menuItemRefs.current || menuItemRefs.current.length === 0) return;

    // 모든 메뉴 아이템 애니메이션 초기화
    const menuItems = menuItemRefs.current.filter(Boolean) as HTMLElement[];

    // 메뉴가 닫힐 때 애니메이션
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

    // 메뉴가 열릴 때 불이 켜지는 애니메이션
    menuItems.forEach((item, index) => {
      // 초기 상태 설정
      gsap.set(item, {
        opacity: 0,
        textShadow: "0 0 0px rgba(255,255,255,0), 0 0 0px rgba(0,102,255,0)",
        color: "#333333",
      });

      // 불이 켜지는 애니메이션 타임라인
      const timeline = gsap.timeline({ delay: index * 0.15 });

      // 첫 번째 단계: 희미하게 나타나기
      timeline.to(item, {
        opacity: 0.3,
        color: "#7788bb",
        textShadow:
          "0 0 2px rgba(255,255,255,0.2), 0 0 4px rgba(0,102,255,0.1)",
        duration: 0.2,
        ease: "power1.in",
      });

      // 두 번째 단계: 깜빡임 1
      timeline.to(item, {
        opacity: 0.1,
        textShadow:
          "0 0 1px rgba(255,255,255,0.1), 0 0 2px rgba(0,102,255,0.1)",
        duration: 0.1,
        ease: "power1.inOut",
      });

      // 세 번째 단계: 깜빡임 2
      timeline.to(item, {
        opacity: 0.5,
        color: "#aabbff",
        textShadow:
          "0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(0,102,255,0.3)",
        duration: 0.1,
        ease: "power1.inOut",
      });

      // 네 번째 단계: 깜빡임 3
      timeline.to(item, {
        opacity: 0.2,
        textShadow:
          "0 0 3px rgba(255,255,255,0.2), 0 0 6px rgba(0,102,255,0.2)",
        duration: 0.1,
        ease: "power1.inOut",
      });

      // 다섯 번째 단계: 완전히 켜짐
      timeline.to(item, {
        opacity: 1,
        color: "#ffffff",
        textShadow: "0 0 21px #fff, 0 0 42px #0066ff, 0 0 80px #0066ff",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // 클린업 함수
    return () => {
      menuItems.forEach((item) => {
        gsap.killTweensOf(item);
      });
    };
  }, [menuItemRefs, isOpen]);
};
