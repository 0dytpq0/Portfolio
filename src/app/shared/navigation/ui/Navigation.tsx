'use client';

import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { cn } from '../../lib';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isDisabled: boolean;
  wrapperClassName?: string;
  buttonClassName?: string;
  iconize: number;
}

export function Navigation({
  onPrev,
  onNext,
  isDisabled,
  wrapperClassName,
  buttonClassName,
  iconize,
}: NavigationProps) {
  return (
    <div className={wrapperClassName}>
      <button
        onClick={onPrev}
        className={cn(
          'w-6 h-6 flex items-center justify-center rounded-full transition-all backdrop-blur-2xl hover:invert cursor-pointer ',
          buttonClassName
        )}
        disabled={isDisabled}
      >
        <BsArrowLeftShort size={iconize} color='black' />
      </button>
      <button
        onClick={onNext}
        className={cn(
          'w-6 h-6 flex items-center justify-center rounded-full transition-all cursor-pointer backdrop-blur-2xl hover:invert',
          buttonClassName
        )}
        disabled={isDisabled}
      >
        <BsArrowRightShort size={iconize} color='black' />
      </button>
    </div>
  );
}
