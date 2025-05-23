'use client';
import React, { useRef } from 'react';
import { useOverlayFadeIn } from '../_hooks/useOverlayFadeIn';

export default function RendingOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  useOverlayFadeIn(overlayRef);

  return (
    <div
      ref={overlayRef}
      className='absolute inset-0 bg-black z-40 pointer-events-none'
      style={{ opacity: 1, transition: 'opacity 2s' }}
    />
  );
}

