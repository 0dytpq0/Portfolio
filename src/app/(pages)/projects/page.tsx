'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';
import Image from 'next/image';
import { useRef } from 'react';

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
          <div className='main-panel w-full h-full absolute inset-0 bg-gray-300 flex rounded-t-3xl'>
            <div className='w-[600px] min-w-[400px] px-4 flex flex-col '>
              <h1 className='font-loopet text-6xl'>Travel Story</h1>
              <div className='text-lg flex justify-end w-full '>
                2016~~~2023
              </div>
              <div className='relative aspect-video w-full h-[450px] rounded-3xl'>
                <Image
                  src='/project.webp'
                  alt='project'
                  fill
                  className='object-cover rounded-3xl'
                />
              </div>
              <div className='flex items-center w-full'>
                buttons github, Site notion 등
              </div>
            </div>
            <div className='flex-1 pl-8'>
              <div>
                <p>간단 설명</p>
                <p>기여 역할</p>
              </div>
              <div>기술적 의사결정</div>
              <div>트러블 슈팅</div>
            </div>
          </div>
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
