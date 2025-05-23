import { deepFreeze } from '@/app/shared';
import { ProjectItem } from '@/app/shared/types';

export const PROJECT = deepFreeze<ProjectItem[]>([
  {
    name: 'TravelStory',
    duration: '2024.07 ~ 2024.08',
    gitHub: 'https://github.com/0dytpq0/final-project-b1',
    address: 'https://final-project-b1.vercel.app',
    description:
      '사용자들에게 여행지 정보를 제공하고 여행 경험을 공유, 기록할 수 있는 플랫폼입니다. 사용자들이 자신의 여행 이야기를 작성하고 사진과 함께 공유할 수 있습니다. 반응형 디자인으로 모바일에서도 편리하게 사용 가능합니다.',
    images: [
      '/travelstory/main.webp',
      '/travelstory/detail.webp',
      '/travelstory/list.webp',
      '/travelstory/review.webp',
      '/travelstory/plan.webp',
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
  {
    name: 'Portfolio',
    description: '토이 프로젝트로 진행했던 기존 개인 포트폴리오 사이트입니다.',
    images: ['/project.webp'],
    duration: '2024.012.~123',
    gitHub: 'https://github.com/0dytpq0/js_portfoilio',
    address: 'https://js-portfoilio.vercel.app/',
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
  {
    name: 'Jayz',
    description: '토이 프로젝트로 진행했던 기존 개인 포트폴리오 사이트입니다.',
    images: ['/project.webp'],
    duration: '2024.012.~123',
    gitHub: 'https://github.com/0dytpq0/js_portfoilio',
    address: 'https://js-portfoilio.vercel.app/',
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
  {
    name: 'Kays',
    description: '토이 프로젝트로 진행했던 기존 개인 포트폴리오 사이트입니다.',
    images: ['/project.webp'],
    duration: '2024.012.~123',
    gitHub: 'https://github.com/0dytpq0/js_portfoilio',
    address: 'https://js-portfoilio.vercel.app/',
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
