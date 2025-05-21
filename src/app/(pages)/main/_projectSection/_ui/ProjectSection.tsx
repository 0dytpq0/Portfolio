'use client';

import React from 'react';

// 타입 및 데이터 임포트
import { projects } from '../_data/projects';

// 커스텀 훅 임포트

// UI 컴포넌트 임포트
import { ProjectMedia } from './ProjectMedia';
import { ProjectDetails } from './ProjectDetails';
import { useRenderAnimation } from '../_hooks/useRenderAnimation';
import { useProjectAnimation } from '../_hooks/useProjectAnimation';
import { Navigation } from '@/app/shared/navigation/ui/Navigation';
import { useNavigation } from '@/app/shared';
import { ProjectItem } from '../_types/project';

export function ProjectSection() {
  const { sectionRef } = useRenderAnimation();
  const { activeItem, isAnimating, changeItem } =
    useNavigation<ProjectItem>(projects);
  const { projectRef } = useProjectAnimation(activeItem);

  const currentProject = projects[activeItem];

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='w-full h-dvh bg-[#eee9e9] snap-start relative'
    >
      <Navigation
        onPrev={() => changeItem('prev')}
        onNext={() => changeItem('next')}
        isDisabled={isAnimating}
        wrapperClassName='absolute bottom-1/2 w-full flex justify-between px-20 z-20 min-w-[1366px]'
        buttonClassName='arrow-left w-12 h-12 flex items-center justify-center rounded-full transition-all backdrop-blur-2xl hover:invert cursor-pointer '
        iconize={50}
      />

      <h1 className='project-title absolute mx-auto top-[10%] text-9xl font-bold mb-8 text-[#dadada] font-loopet '>
        {currentProject.name}
      </h1>

      <div
        ref={projectRef}
        className='w-full h-full flex items-center gap-x-40 z-10 px-30 mx-auto max-w-[1366px]'
      >
        <ProjectMedia project={currentProject} />

        <ProjectDetails project={currentProject} index={activeItem} />
      </div>
    </section>
  );
}
