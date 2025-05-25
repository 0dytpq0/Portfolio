'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaAnimation } from '../_hooks/useMediaAnimation';
import { ProjectItem } from '@/shared';

interface ProjectMediaProps {
  project: ProjectItem;
}

const ProjectMedia = React.memo(function ProjectMedia({
  project,
}: ProjectMediaProps) {
  const { imageContainerRef } = useMediaAnimation(project.images.length);
  const images = useMemo(
    () =>
      project.images.map((image, index) => (
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
            loading='lazy'
            sizes='(max-width: 700px) 100vw, 700px'
          />
        </div>
      )),
    [project.images, project.name]
  );
  return (
    <div className='flex flex-col items-end gap-y-8'>
      <div
        ref={imageContainerRef}
        className='project-image relative aspect-auto w-[700px] h-[400px] overflow-hidden'
      >
        {images}
      </div>
      <div className='button-box flex items-center gap-x-4'>
        <Link
          href={`/projects/${project.name}`}
          className='p-2 border-2 border-[#dadada] rounded-lg hover:invert-25 transition-colors cursor-pointer'
        >
          More
        </Link>
      </div>
    </div>
  );
});

export default ProjectMedia;

