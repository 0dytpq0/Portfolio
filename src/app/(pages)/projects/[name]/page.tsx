'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';
import { useRef } from 'react';
import { PROJECT } from '@/app/shared';
import ProjectSection from '../_ui/ProjectSection';

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
          toggleActions: 'play none none none',
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
  return (
    <ReactLenis root>
      <div className='h-dvh w-dvw' ref={containerRef}>
        <div className='panels-container w-full h-full relative overflow-hidden'>
          {PROJECT.map((project, index) => (
            <ProjectSection
              key={index}
              projectData={project}
              panelType={index === 0 ? 'main-panel' : 'sub-panel'}
            />
          ))}
        </div>
      </div>
    </ReactLenis>
  );
}
