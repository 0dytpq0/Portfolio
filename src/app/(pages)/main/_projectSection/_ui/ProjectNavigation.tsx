'use client';

import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

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
    <div className='absolute bottom-1/2 w-full flex justify-between px-20 z-20 min-w-[1366px]'>
      <button
        onClick={onPrev}
        className='arrow-left w-12 h-12 flex items-center justify-center rounded-full transition-all backdrop-blur-2xl hover:invert cursor-pointer '
        disabled={isDisabled}
      >
        <BsArrowLeftShort size={50} color='black' />
      </button>
      <button
        onClick={onNext}
        className='arrow-right w-12 h-12 flex items-center justify-center rounded-full transition-all cursor-pointer backdrop-blur-2xl hover:invert'
        disabled={isDisabled}
      >
        <BsArrowRightShort size={50} color='black' />
      </button>
    </div>
  );
}
