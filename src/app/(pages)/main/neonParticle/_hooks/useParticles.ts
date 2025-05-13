'use client';

import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { Particle, ParticleOptions } from '../_type/particle';

const defaultOptions: ParticleOptions = {
  colors: ['#0066ff', '#00ffff', '#ff00ff', '#00ff00', '#ffffff'],
  poolSize: 150,
  minSize: 1,
  maxSize: 5,
  minSpeed: 1,
  maxSpeed: 2,
  minOpacity: 0.3,
  maxOpacity: 1,
  spawnRate: 0.1,
  initialCount: 20,
};

export function useParticles(
  containerRef: React.RefObject<HTMLDivElement>,
  options: ParticleOptions = {}
) {
  const mergedOptions = useMemo(() => {
    return { ...defaultOptions, ...options };
  }, [options]);

  const particlePoolRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const initializeParticlePool = () => {
      for (let i = 0; i < mergedOptions.poolSize!; i++) {
        const particle = document.createElement('div');
        const size =
          Math.random() * (mergedOptions.maxSize! - mergedOptions.minSize!) +
          mergedOptions.minSize!;
        const color =
          mergedOptions.colors![
            Math.floor(Math.random() * mergedOptions.colors!.length)
          ];

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${size}px ${color}`;
        particle.style.opacity = '0';
        particle.style.willChange = 'transform, opacity';
        particle.style.display = 'none';
        container.appendChild(particle);

        const newParticle: Particle = {
          element: particle,
          x: 0,
          y: 0,
          size,
          speed:
            Math.random() *
              (mergedOptions.maxSpeed! - mergedOptions.minSpeed!) +
            mergedOptions.minSpeed!,
          opacity:
            Math.random() *
              (mergedOptions.maxOpacity! - mergedOptions.minOpacity!) +
            mergedOptions.minOpacity!,
          color,
          active: false,
        };

        particlePoolRef.current.push(newParticle);
      }
    };

    const activateParticle = (initialY = -10) => {
      const inactiveParticle = particlePoolRef.current.find((p) => !p.active);
      if (!inactiveParticle) return null;

      const x = Math.random() * containerWidth;
      const y = initialY;

      inactiveParticle.x = x;
      inactiveParticle.y = y;
      inactiveParticle.speed =
        Math.random() * (mergedOptions.maxSpeed! - mergedOptions.minSpeed!) +
        mergedOptions.minSpeed!;
      inactiveParticle.active = true;

      inactiveParticle.element.style.left = `${x}px`;
      inactiveParticle.element.style.display = 'block';
      inactiveParticle.element.style.transform = `translateY(${y}px)`;

      gsap.to(inactiveParticle.element, {
        opacity: inactiveParticle.opacity,
        duration: 0.5,
      });

      return inactiveParticle;
    };

    const deactivateParticle = (particle: Particle) => {
      particle.active = false;
      particle.element.style.opacity = '0';
      particle.element.style.display = 'none';
    };

    const moveParticles = () => {
      particlePoolRef.current.forEach((particle) => {
        if (!particle.active) return;

        particle.y += particle.speed;
        particle.element.style.transform = `translateY(${particle.y}px)`;

        if (particle.y > containerHeight) {
          deactivateParticle(particle);
        }
      });

      if (Math.random() < mergedOptions.spawnRate!) {
        activateParticle();
      }

      animationRef.current = requestAnimationFrame(moveParticles);
    };

    initializeParticlePool();

    for (let i = 0; i < mergedOptions.initialCount!; i++) {
      const initialY = Math.random() * containerHeight;
      const particle = activateParticle(initialY);
      if (particle) {
        particle.element.style.transform = `translateY(${initialY}px)`;
      }
    }

    moveParticles();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      particlePoolRef.current.forEach((particle) => {
        if (container.contains(particle.element)) {
          container.removeChild(particle.element);
        }
      });

      particlePoolRef.current = [];
    };
  }, [
    containerRef,
    mergedOptions.colors,
    mergedOptions.poolSize,
    mergedOptions.minSize,
    mergedOptions.maxSize,
    mergedOptions.minSpeed,
    mergedOptions.maxSpeed,
    mergedOptions.minOpacity,
    mergedOptions.maxOpacity,
    mergedOptions.spawnRate,
    mergedOptions.initialCount,
  ]);
}

