'use client';

import React, { useRef, useMemo } from 'react';
import { useParticles } from '../_hooks/useParticles';

const NeonParticles = React.memo(function NeonParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 네온 파티클 훅 사용
  const particleOptions = useMemo(
    () => ({
      colors: ['#0066ff', '#00ffff', '#ff00ff', '#00ff00', '#ffffff'],
      poolSize: 150,
      minSize: 1,
      maxSize: 5,
      minSpeed: 1,
      maxSpeed: 2,
      spawnRate: 0.1,
      initialCount: 20,
    }),
    []
  );
  useParticles(
    containerRef as React.RefObject<HTMLDivElement>,
    particleOptions
  );

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 pointer-events-none z-0'
      aria-hidden='true'
    />
  );
});

export default NeonParticles;

