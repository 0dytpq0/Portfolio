import Image from 'next/image';
import IconButton from '@/widgets/IconButton';
import { ProjectItem } from '@/shared';
import { cn } from '@/shared/lib';

interface LeftSectionProps {
  projectData: ProjectItem;
}

export function LeftSection({ projectData }: LeftSectionProps) {
  return (
    <div
      className={cn(
        'w-[600px] min-w-[400px] flex flex-col gap-y-4 p-6 rounded-xl border glaze-bg text-white'
      )}
    >
      <h1 className='font-loopet text-6xl'>{projectData.name}</h1>
      <div className='text-lg text-[#919191] flex justify-end w-full'>
        {projectData.duration}
      </div>
      <div className='relative aspect-video w-full h-[450px] rounded-3xl'>
        <Image
          src={projectData.images[0]}
          alt='project'
          fill
          className='object-cover rounded-3xl'
        />
      </div>
      <div className='flex items-center gap-x-4 w-full'>
        <IconButton
          src='/skills/github.svg'
          alt='github'
          width={40}
          height={40}
          address={projectData.gitHub}
        />
        {projectData.address && (
          <IconButton
            src='/skills/website.svg'
            alt='website'
            width={40}
            height={40}
            address={projectData.address}
          />
        )}
        <IconButton
          src='/skills/notion.svg'
          alt='notion'
          width={40}
          height={40}
          address={projectData.notion}
        />
      </div>
    </div>
  );
}

