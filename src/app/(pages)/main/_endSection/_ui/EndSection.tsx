'use client';

import { useRef } from 'react';
import { useEndSectionAnimation } from '../_hooks/useEndSectionAnimation';

export default function EndSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEndSectionAnimation({
    sectionRef,
    titleRef,
  });

  return (
    <section
      id='more'
      ref={sectionRef}
      className='w-full h-dvh snap-start relative flex items-center max-w-[1360px] mx-auto'
    >
      <h1
        ref={titleRef}
        style={{
          textShadow: '0 0 21px #fff, 0 0 42px #0066ff, 0 0 120px #0066ff',
        }}
        className='split flex-1 flex pl-4 text-white text-8xl font-bold mb-8 font-loopet'
      >
        <span>Thank you For Watching!</span>
      </h1>
    </section>
  );
}

