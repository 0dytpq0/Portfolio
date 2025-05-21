import IconButton from '@/widgets/IconButton';
import Image from 'next/image';
import { useNavigation, NavigationItem } from '@/app/shared';
import { Navigation } from '@/app/shared/navigation/ui/Navigation';

// Mock 데이터
const technicalDecisions: NavigationItem[] = [
  {
    id: 1,
    title: '프론트엔드 기술',
    description:
      'React와 Next.js를 사용하여 SSR 및 정적 생성을 활용한 최적화된 웹 애플리케이션을 구현했습니다. Tailwind CSS를 통해 빠른 UI 개발과 일관된 디자인 시스템을 구축했습니다.',
  },
  {
    id: 2,
    title: '상태 관리',
    description:
      'Redux Toolkit을 사용하여 전역 상태를 효율적으로 관리하고, React Query를 도입하여 서버 상태 관리와 캐싱을 최적화했습니다. 이를 통해 불필요한 API 호출을 줄이고 사용자 경험을 향상시켰습니다.',
  },
  {
    id: 3,
    title: '성능 최적화',
    description:
      '코드 스플리팅과 지연 로딩을 적용하여 초기 로딩 시간을 단축했으며, 이미지 최적화와 캐싱 전략을 통해 웹 성능 점수를 크게 향상시켰습니다. Lighthouse 성능 점수 95점 이상을 달성했습니다.',
  },
];

// 트러블 슈팅 mock 데이터
const troubleshootingItems: NavigationItem[] = [
  {
    id: 1,
    title: '폼데이터 에러',
    description:
      '폼데이터를 서버로 전송할 때, 폼데이터를 JSON.stringify()로 변환하여 전송하는 것이 아닌, 폼데이터를 그대로 전송해야 했습니다. Content-Type을 application/json이 아닌 multipart/form-data로 설정하여 해결했습니다.',
  },
  {
    id: 2,
    title: '이미지 로딩 이슈',
    description:
      '대용량 이미지 로딩 시 성능 저하 문제가 발생했습니다. Next.js의 Image 컴포넌트를 사용하여 이미지 최적화를 적용하고, 지연 로딩 및 웹팩을 사용하여 이미지 파일 크기를 줄여 해결했습니다.',
  },
  {
    id: 3,
    title: '상태 관리 문제',
    description:
      '사용자 정보가 여러 컴포넌트에서 공유되어야 하는 문제가 발생했습니다. 기존에는 props drilling을 통해 데이터를 전달했지만, 코드가 복잡해지고 유지보수가 어려워졌습니다. Context API와 React Query를 사용하여 상태 관리를 중앙화하여 해결했습니다.',
  },
];

export default function ProjectSection() {
  const { activeItem, isAnimating, changeItem } =
    useNavigation<NavigationItem>(technicalDecisions);
  const {
    activeItem: activeTroubleshoot,
    isAnimating: isTroubleshootAnimating,
    changeItem: changeTroubleshoot,
  } = useNavigation<NavigationItem>(troubleshootingItems);
  return (
    <div className='main-panel w-full h-full p-4 absolute inset-0 bg-black flex gap-4 rounded-t-3xl text-white'>
      <div className='w-[600px] min-w-[400px] flex flex-col gap-y-4 glaze-bg p-6'>
        <h1 className='font-loopet text-6xl'>Travel Story</h1>
        <div className='text-lg flex justify-end  w-full text-[#919191] '>
          2024.09~~~2025.05
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
            address='https://github.com/0dytpq0'
          />

          <IconButton
            src='/skills/website.svg'
            alt='website'
            width={40}
            height={40}
            address='https://github.com/0dytpq0'
          />
          <IconButton
            src='/skills/notion.svg'
            alt='notion'
            width={40}
            height={40}
            address='https://github.com/0dytpq0'
          />
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-4 glaze-bg p-6'>
        <div className='flex gap-2 justify-between'>
          <div className='flex-1 flex flex-col gap-y-2'>
            <h2 className='text-2xl font-bold'>프로젝트 소개</h2>
            <p>
              &apos;Travel Story&apos;는 유저들에게 여행에 대한 편의성을
              제공하기 위해 개발한 플랫폼입니다. 유저가 관심있는 여행지의 정보를
              쉽게 얻고, 일정과 관광지를 공유 및 계획할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
        <div className='flex gap-2 justify-between'>
          <div className='flex flex-col gap-y-2 '>
            <h2 className='text-2xl font-bold'>기여 역할</h2>
            <ul className='list-disc pl-4'>
              <li>도시,나라 소개 페이지 제작</li>
              <li>리뷰, 북마크, 일정 생성 등의 기능 구현</li>
              <li>해당 도시의 여행지 페이지 제작</li>
              <li>페이지 성능 최적화</li>
            </ul>
          </div>
          <div className='flex-1 flex flex-col gap-y-2'>
            <div className='relative flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>
                기술적 의사결정 - {technicalDecisions[activeItem].title}
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
                {technicalDecisions[activeItem].description}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>
              트러블 슈팅 - {troubleshootingItems[activeTroubleshoot].title}
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

          <div className='flex gap-2 justify-between'>
            <div className='flex-1'>
              <h4 className='text-lg font-bold mb-2'>원인</h4>
              <div className='min-h-[100px]'>
                <p className='transition-opacity duration-500'>
                  {
                    troubleshootingItems[activeTroubleshoot].description.split(
                      '.'
                    )[0]
                  }
                  .
                </p>
              </div>
            </div>
            <div className='flex-1'>
              <h4 className='text-lg font-bold mb-2'>해결</h4>
              <div className='min-h-[100px]'>
                <p className='transition-opacity duration-500'>
                  {troubleshootingItems[activeTroubleshoot].description
                    .split('.')
                    .slice(1)
                    .join('.')}
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-2 justify-between'>
            <div className='relative aspect-auto flex-1 h-[250px] rounded-3xl'>
              <Image
                src='/project.webp'
                alt='project'
                fill
                className='object-cover rounded-3xl'
              />
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

