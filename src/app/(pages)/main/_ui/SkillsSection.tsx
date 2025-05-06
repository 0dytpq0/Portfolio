"use client";

import React, { useState, useRef, useMemo } from "react";
import { SkillCategory } from "../_types";
import { categories, skills } from "../_data";
import { useTabIndicator } from "../_hooks";
import { SkillTabs } from "./SkillTabs";
import { SkillsContent } from "./SkillsContent";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("language");

  const languageRef = useRef<HTMLButtonElement>(null);
  const frontendRef = useRef<HTMLButtonElement>(null);
  const etcRef = useRef<HTMLButtonElement>(null);

  const buttonRefs = useMemo(
    () => ({
      language: languageRef,
      frontend: frontendRef,
      etc: etcRef,
    }),
    []
  );

  const { getIndicatorStyle } = useTabIndicator(categories, buttonRefs);

  const handleCategoryClick = (category: SkillCategory) => {
    setActiveCategory(category);
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

        <SkillTabs
          categories={categories}
          activeCategory={activeCategory}
          buttonRefs={buttonRefs}
          onCategoryClick={handleCategoryClick}
          indicatorStyle={getIndicatorStyle(activeCategory)}
        />

        <SkillsContent skills={skills[activeCategory]} />
      </div>
    </section>
  );
}
