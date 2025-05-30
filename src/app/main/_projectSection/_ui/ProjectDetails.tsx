'use client';

import { ProjectItem } from '@/shared';
import React from 'react';

interface ProjectDetailsProps {
  project: ProjectItem;
  index: number;
}

export function ProjectDetails({ project, index }: ProjectDetailsProps) {
  return (
    <div className='project-info flex-1'>
      <div className='flex items-center mb-6'>
        <span className='text-lg mr-2'>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className='bg-[#dadada] h-[2px] w-8 mr-2'></div>
        <h2 className='text-3xl font-semibold whitespace-nowrap'>
          {project.name}
        </h2>
      </div>
      <div className='project-desc pl-4'>
        <p className='text-gray-700 max-w-xl leading-relaxed'>
          {project.description}
        </p>
      </div>
    </div>
  );
}
