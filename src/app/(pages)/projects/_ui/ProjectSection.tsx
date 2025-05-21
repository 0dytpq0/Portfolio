import Image from 'next/image';

export default function ProjectSection() {
  return (
    <div className='main-panel w-full h-full absolute inset-0 bg-gray-300 flex rounded-t-3xl p-5'>
      <div className='w-[600px] min-w-[400px] px-4 flex flex-col gap-y-4'>
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
          <button className='px-4 py-2 border-2 border-black'>github</button>
          <button className='px-4 py-2 border-2 border-black'>Site</button>
          <button className='px-4 py-2 border-2 border-black'>Notion</button>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-4 pl-8'>
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
            <h2 className='text-2xl font-bold'>기술적 의사결정</h2>
            <p>
              &apos;Travel Story&apos;는 유저들에게 여행에 대한 편의성을
              제공하기 위해 개발한 플랫폼입니다. 유저가 관심있는 여행지의 정보를
              쉽게 얻고, 일정과 관광지를 공유 및 계획할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>트러블 슈팅 - 폼데이터 에러</h2>
          <div className='flex gap-2 justify-between'>
            <div>
              <h4 className='text-lg font-bold mb-2'>원인</h4>
              <p>
                폼데이터를 서버로 전송할 때, 폼데이터를 JSON.stringify()로
                변환하여 전송하는 것이 아닌, 폼데이터를 그대로 전송해야
                했습니다.
              </p>
            </div>
            <div>
              <h4 className='text-lg font-bold mb-2'>해결</h4>
              <p>
                폼데이터를 서버로 전송할 때, 폼데이터를 JSON.stringify()로
                변환하여 전송하는 것이 아닌, 폼데이터를 그대로 전송해야
                했습니다.
              </p>
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
