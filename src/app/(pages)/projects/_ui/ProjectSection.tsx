import IconButton from '@/widgets/IconButton';
import Image from 'next/image';
import { Navigation, useNavigation } from '@/widgets';
import { PROJECT } from '@/app/shared';

export default function ProjectSection() {
  const projectData = PROJECT[0];
  const { activeItem, isAnimating, changeItem } = useNavigation(
    projectData.techDecision
  );
  const {
    activeItem: activeTroubleshoot,
    isAnimating: isTroubleshootAnimating,
    changeItem: changeTroubleshoot,
  } = useNavigation(projectData.problems);

  return (
    <div className='main-panel w-full h-full p-4 absolute inset-0 bg-black flex gap-4 rounded-t-3xl text-white'>
      <div className='w-[600px] min-w-[400px] flex flex-col gap-y-4 glaze-bg p-6'>
        <h1 className='font-loopet text-6xl'>{projectData.name}</h1>
        <div className='text-lg flex justify-end  w-full text-[#919191] '>
          {projectData.duration}
        </div>
        <div className='relative aspect-video w-full h-[450px] rounded-3xl'>
          <Image
            src='/project.webp'
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

          <IconButton
            src='/skills/website.svg'
            alt='website'
            width={40}
            height={40}
            address={projectData.address}
          />
          <IconButton
            src='/skills/notion.svg'
            alt='notion'
            width={40}
            height={40}
            address={projectData.gitHub}
          />
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-4 glaze-bg p-6'>
        <div className='flex gap-2 justify-between'>
          <div className='flex-1 flex flex-col gap-y-2'>
            <h2 className='text-2xl font-bold'>프로젝트 소개</h2>
            <p>{projectData.description}</p>
          </div>
        </div>
        <div className='flex gap-2 justify-between'>
          <div className='flex flex-col gap-y-2 '>
            <h2 className='text-2xl font-bold'>기여 역할</h2>
            <ul className='list-disc pl-4'>
              {projectData.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
          <div className='flex-1 flex flex-col gap-y-2'>
            <div className='relative flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>
                기술적 의사결정 - {projectData.techDecision[activeItem].name}
              </h2>
              <Navigation
                onPrev={() => changeItem('prev')}
                onNext={() => changeItem('next')}
                isDisabled={isAnimating}
                wrapperClassName='flex justify-end items-center gap-4'
                buttonClassName='w-8 h-8 '
                iconize={25}
              />
            </div>
            <div className='relative min-h-[120px] flex items-center'>
              <p className='transition-opacity duration-500'>
                {projectData.techDecision[activeItem].reasons.map(
                  (reason, index) => (
                    <span key={index}>{reason}</span>
                  )
                )}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>
              트러블 슈팅 - {projectData.problems[activeTroubleshoot].title}
            </h2>
            <Navigation
              onPrev={() => changeTroubleshoot('prev')}
              onNext={() => changeTroubleshoot('next')}
              isDisabled={isTroubleshootAnimating}
              wrapperClassName='flex justify-end gap-4'
              buttonClassName='w-8 h-8'
              iconize={25}
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex-1'>
                <h4 className='text-lg font-bold mb-2'>원인</h4>
                <div className='min-h-[100px]'>
                  <p className='transition-opacity duration-500'>
                    {projectData.problems[activeTroubleshoot].reason}
                  </p>
                </div>
              </div>
              <div className='flex-1'>
                <h4 className='text-lg font-bold mb-2'>해결</h4>
                <div className='min-h-[100px]'>
                  <p className='transition-opacity duration-500'>
                    {projectData.problems[activeTroubleshoot].solve}
                  </p>
                </div>
              </div>
            </div>
            <div className='relative aspect-auto flex-1 h-[250px] rounded-3xl'>
              <Image
                src='/project.webp'
                alt='project'
                fill
                className='object-cover rounded-3xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

