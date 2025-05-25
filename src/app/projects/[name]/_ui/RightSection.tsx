import Image from 'next/image';
import { ProjectItem } from '@/shared';
import { Navigation, useNavigation } from '@/widgets';
import { cn, splitSentences } from '@/shared/lib';

interface RightSectionProps {
  projectData: ProjectItem;
}

export function RightSection({ projectData }: RightSectionProps) {
  const { activeItem, isAnimating, changeItem } = useNavigation(
    projectData.techDecision
  );
  const {
    activeItem: activeTroubleshoot,
    isAnimating: isTroubleshootAnimating,
    changeItem: changeTroubleshoot,
  } = useNavigation(projectData.problems || []);
  console.log(projectData);
  return (
    <div
      className={cn(
        'flex-1 flex flex-col gap-4 p-6 rounded-xl border glaze-bg text-white'
      )}
    >
      <div className='flex gap-2 justify-between'>
        <div className='flex-1 flex flex-col gap-y-2'>
          <h2 className={cn('text-2xl font-bold')}>프로젝트 소개</h2>
          <p>{splitSentences(projectData.description)}</p>
        </div>
      </div>
      <div
        className={cn(
          `flex gap-2 justify-between`,
          projectData.problems || 'flex-col gap-y-4'
        )}
      >
        <div className='flex-1 max-w-[400px] flex flex-col gap-y-2'>
          <h2 className={cn('text-2xl font-bold')}>구현 목록</h2>
          <ul className={cn('list-disc pl-4')}>
            {projectData.tasks?.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className='flex-1 flex flex-col gap-y-2'>
          <div className='relative flex justify-between items-center'>
            <h2 className={cn('text-2xl font-bold')}>
              기술적 의사결정 - {projectData.techDecision[activeItem].name}
            </h2>
            <Navigation
              onPrev={() => changeItem('prev')}
              onNext={() => changeItem('next')}
              isDisabled={isAnimating}
              wrapperClassName='flex justify-end items-center gap-4'
              buttonClassName='w-8 h-8'
              iconize={25}
            />
          </div>
          <div className='relative min-h-[120px] flex'>
            <p className={cn('transition-opacity duration-500')}>
              {projectData.techDecision[activeItem].reasons.map(
                (reason, index) => (
                  <span key={index}>{reason}</span>
                )
              )}
            </p>
          </div>
        </div>
      </div>
      {projectData.problems && (
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h2 className={cn('text-2xl font-bold')}>
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
                <h4 className={cn('text-lg font-bold mb-2')}>원인</h4>
                <div className='min-h-[100px]'>
                  <p className={cn('transition-opacity duration-500')}>
                    {projectData.problems[activeTroubleshoot].reason}
                  </p>
                </div>
              </div>
              <div className='flex-1'>
                <h4 className={cn('text-lg font-bold mb-2')}>해결</h4>
                <div className='min-h-[100px]'>
                  <p className={cn('transition-opacity duration-500')}>
                    {projectData.problems[activeTroubleshoot].solve}
                  </p>
                </div>
              </div>
            </div>
            <div className='relative aspect-auto flex-1 h-[250px] rounded-3xl'>
              <Image
                src={projectData.problems[activeTroubleshoot].image}
                alt='project'
                fill
                className='object-cover rounded-3xl'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

