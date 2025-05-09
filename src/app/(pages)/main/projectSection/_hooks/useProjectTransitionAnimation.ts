"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useProjectTransitionAnimation = (activeProject: number) => {
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectRef.current) {
      const projectTitle = document.querySelector(".project-title");
      const projectImage = document.querySelector(".project-image");
      const projectInfo = document.querySelector(".project-info");
      const projectDesc = document.querySelector(".project-desc");
      const projectButtons = document.querySelector(".button-box");

      if (projectTitle && projectImage && projectInfo && projectDesc) {
        // 초기 상태 설정
        gsap.set(
          [
            projectTitle,
            projectImage,
            projectInfo,
            projectDesc,
            projectButtons,
          ],
          {
            opacity: 0,
            y: 30,
          }
        );

        gsap.to(
          [
            projectTitle,
            projectImage,
            projectInfo,
            projectDesc,
            projectButtons,
          ],
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }
    }
  }, [activeProject]);

  return { projectRef };
};
