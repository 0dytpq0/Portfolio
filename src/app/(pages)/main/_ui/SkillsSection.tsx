"use client";

import { cn } from "@/app/shared/lib/cn";
import React, { useState, useRef, useMemo, useEffect } from "react";

type SkillCategory = "language" | "frontend" | "backend" | "etc";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("language");

  const languageRef = useRef<HTMLButtonElement>(null);
  const frontendRef = useRef<HTMLButtonElement>(null);
  const backendRef = useRef<HTMLButtonElement>(null);
  const etcRef = useRef<HTMLButtonElement>(null);

  const categories = useMemo<SkillCategory[]>(
    () => ["language", "frontend", "backend", "etc"],
    []
  );

  const buttonRefs = useMemo(
    () => ({
      language: languageRef,
      frontend: frontendRef,
      backend: backendRef,
      etc: etcRef,
    }),
    []
  );

  const handleCategoryClick = (category: SkillCategory) => {
    setActiveCategory(category);
  };

  const [buttonWidths, setButtonWidths] = useState<{ [key: string]: number }>(
    {}
  );
  const [buttonPositions, setButtonPositions] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const updateWidths = () => {
      const newWidths: { [key: string]: number } = {};
      const newPositions: { [key: string]: number } = {};
      let position = 0;

      categories.forEach((category) => {
        const button = buttonRefs[category]?.current;
        if (button) {
          const width = button.offsetWidth;
          newWidths[category] = width;
          newPositions[category] = position;
          position += width;
        }
      });

      setButtonWidths(newWidths);
      setButtonPositions(newPositions);
    };

    // Initial measurement
    updateWidths();

    // Add resize listener to handle window size changes
    window.addEventListener("resize", updateWidths);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, [categories, buttonRefs]);

  const getClickedStyle = () => {
    return {
      width: buttonWidths[activeCategory]
        ? `${buttonWidths[activeCategory]}px`
        : "0",
      left: buttonPositions[activeCategory]
        ? `${buttonPositions[activeCategory]}px`
        : "0",
      transition: "all 0.3s ease-in-out",
    };
  };

  return (
    <section
      id="skills"
      className="w-full h-[100dvh] flex flex-col items-center justify-center px-8 bg-black text-white snap-start"
    >
      <div className="w-full px-8 h-dvh py-16 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 font-loopet">
          Skills
        </h2>

        <div className="mb-8">
          <div className="flex justify-between w-full mb-2">
            {categories.map((category) => (
              <button
                key={category}
                ref={buttonRefs[category]}
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "text-lg font-medium w-full transition-colors duration-300 px-4 py-2 text-white cursor-pointer hover:text-blue-200 focus:text-blue-400",
                  activeCategory === category && "text-blue-400"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="relative w-full h-[2px] bg-white">
            <div
              className="absolute h-[2px] bg-blue-400 transition-all duration-300 ease-in-out shadow-[0_0_20px_#fff,0_0_40px_#fff]"
              style={getClickedStyle()}
            />
          </div>
        </div>

        <div className="flex-1">
          {activeCategory === "language" && (
            <div>
              <p>Language</p>
            </div>
          )}

          {activeCategory === "frontend" && (
            <div>
              <p>Frontend</p>
            </div>
          )}

          {activeCategory === "backend" && (
            <div>
              <p>Backend</p>
            </div>
          )}

          {activeCategory === "etc" && (
            <div>
              <p>Etc</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
