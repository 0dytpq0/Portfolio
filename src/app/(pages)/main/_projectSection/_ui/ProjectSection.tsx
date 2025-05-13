'use client';

import React from 'react';

// 타입 및 데이터 임포트
import { projects } from '../_data/projects';

// 커스텀 훅 임포트

// UI 컴포넌트 임포트
import { ProjectNavigation } from './ProjectNavigation';
import { ProjectMedia } from './ProjectMedia';
import { ProjectDetails } from './ProjectDetails';
import { useRenderAnimation } from '../_hooks/useRenderAnimation';
import { useProjectNavigation } from '../_hooks/useProjectNavigation';
import { useProjectAnimation } from '../_hooks/useProjectAnimation';

export function ProjectSection() {
  const { sectionRef } = useRenderAnimation();
  const { activeProject, isAnimating, changeProject } =
    useProjectNavigation(projects);
  const { projectRef } = useProjectAnimation(activeProject);

  const currentProject = projects[activeProject];

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='w-full h-dvh bg-[#eee9e9] snap-start relative'
    >
      <ProjectNavigation
        onPrev={() => changeProject('prev')}
        onNext={() => changeProject('next')}
        isDisabled={isAnimating}
      />

      <h1 className='project-title absolute mx-auto top-[10%] text-9xl font-bold mb-8 text-[#dadada] font-loopet '>
        {currentProject.name}
      </h1>

      <div
        ref={projectRef}
        className='w-full h-full flex items-center gap-x-40 z-10 px-30 mx-auto max-w-[1366px]'
      >
        <ProjectMedia project={currentProject} />

        <ProjectDetails project={currentProject} index={activeProject} />
      </div>
    </section>
  );
}
