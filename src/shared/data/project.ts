import { deepFreeze } from '@/shared';
import { ProjectItem } from '@/shared/types';

export const PROJECT = deepFreeze<ProjectItem[]>([
  {
    name: 'TravelStory',
    duration: '2024.07 ~ 2024.08',
    gitHub: 'https://github.com/0dytpq0/final-project-b1',
    address: 'https://final-project-b1.vercel.app',
    notion: 'https://final-project-b1.vercel.app',
    description:
      '사용자들에게 여행지 정보를 제공하고 여행 경험을 공유, 기록할 수 있는 플랫폼입니다. 사용자들이 자신의 여행 이야기를 작성하고 사진과 함께 공유할 수 있습니다. 반응형 디자인으로 모바일에서도 편리하게 사용 가능합니다.',
    images: [
      '/travelstory/webp/main.webp',
      '/travelstory/webp/detail.webp',
      '/travelstory/webp/list.webp',
      '/travelstory/webp/review.webp',
      '/travelstory/webp/plan.webp',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'Supabase',
      'Tanstack-Query',
      'Zustand',
      'TailwindCss',
      'Git',
      'Vercel',
    ],
    tasks: [
      '도시,나라 소개 페이지 제작',
      '리뷰, 북마크, 일정 생성 등의 기능 구현',
      '해당 도시의 여행지 페이지 제작',
      '페이지 성능 최적화',
    ],
    techDecision: [
      {
        name: 'Tanstack Query',
        reasons: [
          '데이터에 대한 자동 캐싱 및 리페칭 기능 및 비동기 작업의 효율적 관리',
          '제공하는 훅들의 강력한 성능으로 인한 SSR, 낙관적 업데이트 등에 대한 간편한 구현',
        ],
      },
      {
        name: 'Supabase',
        reasons: [
          '백엔드 없이도 강력한 데이터 관리 기능 제공',
          '오픈소스이기에 데이터 소유권 유지 가능',
        ],
      },
      {
        name: 'Zustand',
        reasons: [
          '직관적인 API로 인해 간편하게 상태 관리 가능',
          '보일러 플레이트 코드 최소화',
        ],
      },
    ],
    problems: [
      {
        title: '북마크 기능',
        reason:
          'Optimistic Update를 적용하는 도중 입력받는 데이터 형식이 요구하는 형식과 맞지 않아 에러 발생.',
        solve: [
          'Tanstack Query에서 요구하는 데이터 형식의 임시 객체를 로직 내부에 선언 후 형식을 통일시켜 Optimistic Update를 적용.',
        ],
        image: '/travelstory/gif/bookmark.gif',
      },
      {
        title: '관광지별 리뷰 작성 기능',
        reason:
          '리뷰 작성 시 이미지 파일 데이터를 서버로 전송할 때 빈 파일 데이터가 전달되는 문제 발생.',
        solve: ['FormData 객체를 사용해 이미지 데이터를 서버로 전송.'],
        image: '/travelstory/gif/review.gif',
      },
      {
        title: '페이지 성능 최적화',
        reason: '페이지 로딩 속도가 느려 사용자 경험에 부정적인 영향을 미침.',
        solve: [
          '코드 스플리팅과 지연 로딩을 적용하여 초기 로딩 시간 단축.',
          '이미지 최적화와 캐싱 전략을 통해 웹 성능 점수를 크게 향상시켰습니다.',
        ],
        image: '',
      },
    ],
  },
  {
    name: 'Portfolio',
    duration: '2024.05.02 ~ 2024.05.25',
    gitHub: 'https://github.com/0dytpq0/portfolio',
    address: 'https://joseph-portfolio-eosin.vercel.app',
    notion:
      'https://skitter-tv-990.notion.site/Portfolio-1fef8391d64180c1b95fec84c8cb5a01?pvs=73',
    description:
      '저의 기술과 경험, 프로젝트를 소개하는 리뉴얼 포트폴리오 웹사이트입니다. GSAP 기반 네온 애니메이션, FSD(Feature-Sliced Design) 아키텍처,  프로젝트·기술·트러블슈팅 등 다양한 정보 제공.',
    images: [
      '/portfolio/webp/mainRending.webp',
      '/portfolio/webp/mainAbout.webp',
      '/portfolio/webp/mainProject.webp',
      '/portfolio/webp/mainSkills.webp',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'React 19',
      'Tailwind CSS',
      'GSAP',
      'Lenis(부드러운 스크롤)',
      'Zustand',
      'Vercel',
      'Git',
    ],
    tasks: [
      'GSAP을 활용한 네온사인 텍스트 및 메뉴 애니메이션 구현',
      'FSD 아키텍처 기반 폴더 구조 설계 및 UI/로직 분리',
      '스냅 스크롤, 부드러운 섹션 이동, 반응형 웹 구현',
      '서버 컴포넌트/클라이언트 컴포넌트 분리 및 타입 안전성 개선',
    ],
    techDecision: [
      {
        name: 'GSAP',
        reasons: [
          '복잡하고 정교한 네온 애니메이션 및 텍스트 효과 구현에 최적',
          'React와의 연동 및 커스텀 훅 분리로 재사용성/유지보수성 향상',
        ],
      },
      {
        name: 'FSD(Feature-Sliced Design)',
        reasons: [
          'UI, 비즈니스 로직, 데이터 계층을 명확히 분리하여 유지보수성/확장성 확보',
          '컴포넌트 재사용성과 협업 효율성 증대',
        ],
      },
      {
        name: 'Next.js App Router',
        reasons: [
          '서버 컴포넌트와 클라이언트 컴포넌트의 분리 및 SSR/CSR 유연한 적용',
          '동적 라우팅, SEO, 성능 최적화에 유리',
        ],
      },
      {
        name: 'Tailwind CSS',
        reasons: [
          '빠른 스타일링 및 네온/글레이즈 등 감각적인 UI 구현',
          '반응형 디자인 및 다크모드 지원',
        ],
      },
    ],
    problems: [
      {
        title: 'GSAP 네온 애니메이션 구현',
        reason:
          '텍스트의 특정 글자만 번갈아가며 깜빡이는 네온 효과, 메뉴 오픈 시 네온 불빛 애니메이션 등 고난이도 애니메이션 구현에 어려움.',
        solve: [
          'GSAP 커스텀 훅 분리, useGSAP/react 활용, 글자별 ref 관리로 원하는 네온 flicker 효과 완성.',
        ],
        image: '/portfolio/gif/rending.gif',
      },
      {
        title: 'FSD 아키텍처 적용',
        reason:
          '폴더 구조 및 역할 분리 기준 잡기, 기존 Next.js 구조와의 통합에서 혼란 발생.',
        solve: [
          'app, widgets, features, entities, shared 등 FSD 레이어 구분, UI/로직/데이터 분리, 네비게이션 등 공통 컴포넌트화.',
        ],
        image: '',
      },
      {
        title: '서버 컴포넌트 params 타입 문제',
        reason:
          '서버 컴포넌트의 prams 타입이 변경되어 타입 오류 및 데이터 접근 혼란.',
        solve: ['문서 확인 후 Promise<{ name: string }>로 수정하여 해결'],
        image: '',
      },
      {
        title: '프로젝트 페이지 라우팅 시 스크롤 위치 고정',
        reason:
          'useEffect, scrollIntoview, Lenis.scrollTo 등이 적용이 제대로 되지 않음.',
        solve: [
          'GSAP의 ScrollTo 플러그인 활용',
          'ID 기반으로 이동 시 제대로 작동하지 않아, 계산식을 활용',
        ],
        image: '/portfolio/gif/routing.gif',
      },
    ],
  },
  {
    name: 'Js_Portfolio',
    description:
      'Next.js와 TypeScript로 개발된 개인 포트폴리오 사이트입니다. 자기소개, 프로젝트, 경험, 기술스택, 문제해결 경험 등 다양한 정보를 한눈에 볼 수 있도록 구성했습니다.',
    images: ['/jsPortfolio/main.webp', '/jsPortfolio/modal.webp'],
    duration: '2024.01 ~ 2024.02',
    gitHub: 'https://github.com/0dytpq0/js_portfoilio',
    address: 'https://js-portfoilio.vercel.app/',
    notion:
      'https://skitter-tv-990.notion.site/Js-Portfolio-1fef8391d641807594e5e89d93da51f1',
    skills: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Git', 'Vercel'],
    tasks: [
      '자기소개, 기술스택, 프로젝트, 경험, 교육 등 다양한 섹션의 포트폴리오 메인 페이지 구현',
      '프로젝트 상세/문제해결 경험 모달 구현',
    ],
    techDecision: [
      {
        name: 'Next.js(App Router)',
        reasons: [
          '파일 기반 라우팅과 SSR/CSR 지원으로 SEO 및 초기 로딩 속도 최적화',
        ],
      },
      {
        name: 'Tailwind CSS',
        reasons: ['빠르고 일관된 반응형 UI 개발', '유지보수와 확장성에 용이'],
      },
    ],
  },
  {
    name: 'TechBridge',
    description: '개인 과외를 연결해주는 웹앱 플랫폼 사이드 프로젝트입니다.',
    images: ['/project.webp'],
    duration: '2024.5.~ 진행중',
    gitHub: 'https://github.com/Tech-Bridge00',
    address: '',
    notion: '',
    skills: [
      'TypeScript',
      'React.js',
      'React Native',
      'Tanstack-Query',
      'Zustand',
      'TailwindCss',
      'Git',
    ],
    tasks: ['알림 서비스 구현', '1:1 채팅 서비스 구현'],
    techDecision: [
      {
        name: 'React.js',
        reasons: [
          '웹앱 개발에 있어, React Native를 쓰기보단 학습을 목적으로 React.js를 선택하였고 추후 Native로 웹앱 변환 예정입니다.',
        ],
      },
      {
        name: 'Tanstack Query',
        reasons: ['강력한 훅과 캐싱기능을 활용하여 다양한 전략 수립 가능'],
      },
      {
        name: 'Zustand',
        reasons: [
          '직관적인 API로 인해 간편하게 상태 관리 가능',
          '보일러 플레이트 코드 최소화',
        ],
      },
    ],
    problems: [
      {
        title: '북마크 기능',
        reason:
          'Optimistic Update를 적용하는 도중 입력받는 데이터 형식이 요구하는 형식과 맞지 않아 에러 발생.',
        solve: [
          'Tanstack Query에서 요구하는 데이터 형식의 임시 객체를 로직 내부에 선언 후 형식을 통일시켜 Optimistic Update를 적용.',
        ],
        image: '/project.webp',
      },
      {
        title: '관광지별 리뷰 작성 기능',
        reason:
          '리뷰 작성 시 이미지 파일 데이터를 서버로 전송할 때 빈 파일 데이터가 전달되는 문제 발생.',
        solve: ['FormData 객체를 사용해 이미지 데이터를 서버로 전송.'],
        image: '/project.webp',
      },
      {
        title: '페이지 성능 최적화',
        reason: '페이지 로딩 속도가 느려 사용자 경험에 부정적인 영향을 미침.',
        solve: [
          '코드 스플리팅과 지연 로딩을 적용하여 초기 로딩 시간 단축.',
          '이미지 최적화와 캐싱 전략을 통해 웹 성능 점수를 크게 향상시켰습니다.',
        ],
        image: '/project.webp',
      },
    ],
  },
]);
