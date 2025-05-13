'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectItem } from '../_types/project';
import { useMediaAnimation } from '../_hooks/useMediaAnimation';

interface ProjectMediaProps {
  project: ProjectItem;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  const { imageContainerRef } = useMediaAnimation(project.images.length);

  return (
    <div className='flex flex-col items-end gap-y-8'>
      <div
        ref={imageContainerRef}
        className='project-image relative aspect-auto w-[700px] h-[400px] overflow-hidden'
      >
        {project.images.map((image, index) => (
          <div
            key={index}
            className='project-image-item absolute inset-0'
            style={{ zIndex: project.images.length - index }}
          >
            <Image
              src={image}
              alt={`${project.name} ${index + 1}`}
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>
      <div className='button-box flex items-center gap-x-4'>
        <Link
          href={project.github}
          className='p-2 border-2 border-[#dadada] rounded-lg hover:invert-25 transition-colors cursor-pointer'
        >
          Github
        </Link>
        <Link
          href={project.site}
          className='p-2 border-2 border-[#dadada] rounded-lg hover:invert-25 transition-colors cursor-pointer'
        >
          Site
        </Link>
        <Link
          href={project.more}
          className='p-2 border-2 border-[#dadada] rounded-lg hover:invert-25 transition-colors cursor-pointer'
        >
          More
        </Link>
      </div>
    </div>
  );
}
