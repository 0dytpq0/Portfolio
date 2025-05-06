import { cn } from "@/app/shared/lib/cn";
import { CSSProperties, RefObject } from "react";
import { SkillCategory } from "../_types/skills";

interface SkillTabsProps {
  categories: SkillCategory[];
  activeCategory: SkillCategory;
  buttonRefs: {
    [key in SkillCategory]: RefObject<HTMLButtonElement | null>;
  };
  onCategoryClick: (category: SkillCategory) => void;
  indicatorStyle: CSSProperties;
}

export function SkillTabs({
  categories,
  activeCategory,
  buttonRefs,
  onCategoryClick,
  indicatorStyle,
}: SkillTabsProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between w-full mb-2">
        {categories.map((category) => (
          <button
            key={category}
            ref={buttonRefs[category]}
            onClick={() => onCategoryClick(category)}
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
          style={indicatorStyle}
        />
      </div>
    </div>
  );
}
