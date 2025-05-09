"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useProjectAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectTitle = document.querySelector(".project-title");
            const projectImage = document.querySelector(".project-image");
            const projectInfo = document.querySelector(".project-info");
            const projectDesc = document.querySelector(".project-desc");
            const projectButtons = document.querySelector(".button-box");

            if (
              projectTitle &&
              projectImage &&
              projectInfo &&
              projectDesc &&
              projectButtons
            ) {
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
                  duration: 2,
                  stagger: 0.3,
                  ease: "power2.out",
                }
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { sectionRef };
};
