import React from 'react';
import { ProjectItem } from '@/shared';
import { cn } from '@/shared/lib';
import { LeftSection } from './LeftSection';
import { RightSection } from './RightSection';

interface ProjectSectionProps {
  projectData: ProjectItem;
  panelType: 'main-panel' | 'sub-panel';
}

export default function ProjectSection({
  projectData,
  panelType,
}: ProjectSectionProps) {
  return (
    <div
      id={projectData.name}
      className={cn(
        'w-full h-full bg-black p-4 absolute inset-0 flex gap-4 rounded-t-3xl',
        panelType,
        panelType === 'sub-panel' && 'opacity-0'
      )}
    >
      <LeftSection projectData={projectData} />
      <RightSection projectData={projectData} />
    </div>
  );
}

