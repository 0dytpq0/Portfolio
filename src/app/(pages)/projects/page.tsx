'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';
import { useRef } from 'react';
import ProjectSection from './_ui/ProjectSection';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set('.sub-panel', { y: '100%', opacity: 0 });

      const panels = gsap.utils.toArray<HTMLElement>('.sub-panel');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.panels-container',
          start: 'top top',
          end: () => `+=${(panels.length + 0.5) * 100}%`,
          toggleActions: 'play none play none',
          pin: true,
          pinSpacing: true,
          scrub: 3,
        },
      });
      panels.forEach((panel) => {
        tl.to(panel, {
          y: 0,
          opacity: 1,
          duration: 1,
        });
      });
    },

    { scope: containerRef }
  );
  // i === 0 ? main-panel : sub-panel로 구분
  return (
    <ReactLenis root>
      <div className='h-dvh w-dvw' ref={containerRef}>
        <div className='panels-container w-full h-full relative overflow-hidden'>
          <ProjectSection />
          <div className='sub-panel opacity-0  w-full h-full absolute inset-0 bg-red-300 flex items-center justify-center rounded-t-3xl'>
            두 번째 섹션
          </div>

          <div className='sub-panel opacity-0  w-full h-full absolute inset-0 bg-green-300 flex items-center justify-center rounded-t-3xl'>
            세 번째 섹션
          </div>
          <div
            id='fourth-section'
            className='sub-panel opacity-0  w-full h-full absolute inset-0 bg-blue-300 flex items-center justify-center rounded-t-3xl'
          >
            네 번째 섹션
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
