'use client';
import React, { useRef } from 'react';
import { useSubtitleFadeIn } from '../_hooks/useSubtitleFadeIn';

export default function Subtitle() {
  const subTitleRef = useRef<HTMLSpanElement>(null);
  useSubtitleFadeIn(subTitleRef);

  return (
    <span
      ref={subTitleRef}
      className='overflow-hidden w-full flex items-center justify-end text-amber-100'
    >
      FRONTEND DEVELOPER
    </span>
  );
}

