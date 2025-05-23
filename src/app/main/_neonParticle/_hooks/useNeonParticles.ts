'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// 네온 파티클 타입 정의
interface NeonParticle {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  active: boolean;
}

// 네온 색상 배열
const neonColors = [
  '#0066ff', // 파란색 네온
  '#00ffff', // 청록색 네온
  '#ff00ff', // 핑크색 네온
  '#00ff00', // 녹색 네온
  '#ffffff', // 흰색
];

export function useNeonParticles(containerRef: React.RefObject<HTMLDivElement>) {
  const particlePoolRef = useRef<NeonParticle[]>([]);
  const animationRef = useRef<number | null>(null);
  const POOL_SIZE = 150;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // 파티클 생성 함수 (Object Pool 초기화)
    const initializeParticlePool = () => {
      // 미리 파티클 풀 생성
      for (let i = 0; i < POOL_SIZE; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1; // 1-5px 크기
        const color = neonColors[Math.floor(Math.random() * neonColors.length)];

        // 파티클 스타일 설정
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

        // 파티클 객체 생성
        const newParticle: NeonParticle = {
          element: particle,
          x: 0,
          y: 0,
          size,
          speed: Math.random() * 1 + 1,
          opacity: Math.random() * 0.7 + 0.3,
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
      inactiveParticle.speed = Math.random() * 1 + 1;
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

    const deactivateParticle = (particle: NeonParticle) => {
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

      if (Math.random() < 0.1) {
        activateParticle();
      }

      animationRef.current = requestAnimationFrame(moveParticles);
    };

    // 초기화 및 애니메이션 시작
    initializeParticlePool();

    // 초기 파티클 활성화 (화면 전체에 분포)
    for (let i = 0; i < 20; i++) {
      const initialY = Math.random() * containerHeight;
      const particle = activateParticle(initialY);
      if (particle) {
        particle.element.style.transform = `translateY(${initialY}px)`;
      }
    }

    moveParticles();

    // 클린업
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // 모든 파티클 제거
      particlePoolRef.current.forEach((particle) => {
        if (container.contains(particle.element)) {
          container.removeChild(particle.element);
        }
      });

      particlePoolRef.current = [];
    };
  }, [containerRef]);
}
