'use client';

import ReactLenis from 'lenis/react';
import { ProjectItem } from '@/shared';
import useProjectPanelsAnimation from '../_hooks/useProjectPanelsAnimation';
import ProjectSection from './ProjectSection';

interface ProjectPanelsProps {
  projectIdx: number;
  projectList: ProjectItem[];
}

export default function ProjectPanels({
  projectIdx,
  projectList,
}: ProjectPanelsProps) {
  const containerRef = useProjectPanelsAnimation(projectIdx);

  return (
    <ReactLenis root>
      <div className='h-dvh w-dvw' ref={containerRef}>
        <div className='panels-container w-full h-full relative overflow-hidden'>
          {projectList.map((project, index) => (
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

