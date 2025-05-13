'use client';

import { useRef } from 'react';
import { InfoBox } from './InfoBox';
import { useMoreSectionAnimation } from '../_hooks/useMoreSectionAnimation';

export default function MoreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  const initialStyle = { opacity: 0 };

  useMoreSectionAnimation({
    sectionRef,
    titleRef,
    leftBoxRef,
    rightBoxRef,
  });

  return (
    <section
      id='more'
      ref={sectionRef}
      className='w-full h-dvh snap-start relative flex items-center justify-center max-w-[1366px] mx-auto'
    >
      <h1
        ref={titleRef}
        style={{
          textShadow: '0 0 21px #fff, 0 0 42px #0066ff, 0 0 120px #0066ff',
        }}
        className='split flex-1 flex flex-col justify-center gap-y-4 pl-4 text-white text-8xl font-bold mb-8 font-loopet split'
      >
        <span>Thank you</span>
        <span>For</span>
        <span>Watching!</span>
      </h1>

      <div className='flex-1 h-dvh flex flex-col items-center justify-center gap-8'>
        <InfoBox
          ref={leftBoxRef}
          href='/me'
          imageSrc='/joseph.webp'
          imageAlt='joseph'
          title='저에 대해 더 알고싶으신가요?'
          initialStyle={initialStyle}
        />

        <InfoBox
          ref={rightBoxRef}
          href='/projects'
          imageSrc='/project.webp'
          imageAlt='project'
          title={
            <>
              <span>프로젝트의 자세한 정보를</span>
              <span>확인하고 싶으신가요?</span>
            </>
          }
          initialStyle={initialStyle}
        />
      </div>
    </section>
  );
}

