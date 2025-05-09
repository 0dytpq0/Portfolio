"use client";

import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface ProjectNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isDisabled: boolean;
}

export function ProjectNavigation({
  onPrev,
  onNext,
  isDisabled,
}: ProjectNavigationProps) {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-x-16 z-20">
      <button
        onClick={onPrev}
        className="arrow-left w-12 h-12 flex items-center justify-center bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all bg-black cursor-pointer hover:invert"
        disabled={isDisabled}
      >
        <BsArrowLeftShort size={50} color="white" />
      </button>
      <button
        onClick={onNext}
        className="arrow-right w-12 h-12 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all cursor-pointer hover:invert"
        disabled={isDisabled}
      >
        <BsArrowRightShort size={50} color="white" />
      </button>
    </div>
  );
}
