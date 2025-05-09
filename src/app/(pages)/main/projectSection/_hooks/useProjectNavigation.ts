"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ProjectItem } from "../_types/project";

export const useProjectNavigation = (projects: ProjectItem[]) => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeProject = (direction: "next" | "prev") => {
    if (isAnimating) return;

    setIsAnimating(true);

    setActiveProject((prev) => {
      if (direction === "next") {
        return prev === projects.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? projects.length - 1 : prev - 1;
      }
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  useEffect(() => {
    const arrowAnimation = () => {
      gsap.to(".arrow-left", {
        x: -5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".arrow-right", {
        x: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    };

    arrowAnimation();
  }, []);

  return {
    activeProject,
    isAnimating,
    changeProject,
  };
};
