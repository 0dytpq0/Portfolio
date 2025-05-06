import { deepFreeze } from "@/app/shared/lib";
import { SkillCategory, SkillItem } from "../_types/skills";

export const skills: Record<SkillCategory, SkillItem[]> = deepFreeze({
  language: [
    {
      name: "Javascript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      desc: [
        "Generator를 통해 단방향적인 프로세스를 구현할 수 있습니다.",
        "각종 유틸함수를 활용하여 비즈니스 로직을 다룰 수 있습니다.",
        "Proxy와 Reflect를 통해 객체를 래핑하여 다룰 수 있습니다.",
      ],
    },
    {
      name: "Typescript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      desc: [
        "Generic 타입을 다룰 수 있습니다.",
        "Utility 타입, Intersection, union 타입 들을 활용하여 타입을 정의할 수 있습니다.",
      ],
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      desc: ["첫 개발 입문 때 python을 약 6개월 정도 하였습니다."],
    },
  ],
  frontend: [
    {
      name: "React.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      desc: [
        "리액트를 활용하여 실무 및 여러 프로젝트를 접해보았습니다.",
        "각종 훅에 대한 이해도가 있으며, 이를 잘 활용할 수 있습니다.",
      ],
    },
    {
      name: "Next.js",
      image: "/next.svg",
      desc: [
        "서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구현할 수 있습니다.",
        "서버 사이드 렌더링과 메타데이터를 활용한 SEO 최적화를 해본 경험이 있습니다.",
      ],
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      desc: ["모듈화를 하여 CSS를 관리할 수 있습니다."],
    },
    {
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      desc: [
        "tailwind 속성을 확장하여 다룰 수 있습니다.",
        "각종 UI를 직접 구현할 수 있습니다.",
      ],
    },
    {
      name: "Gsap",
      image: "/gsap.svg",
      desc: ["포트폴리오 사이트의 애니메이션 구현에 사용하였습니다. "],
    },
    {
      name: "TanstackQuery",
      image: "/tanstackquery.svg",
      desc: [
        "제공하는 강력한 훅들을 사용하여, 데이터 관리, Infinity scroll, Optimistic Updates 등을 구현해보았습니다.",
        "캐싱 전략을 생각하고 적용해본 적 있습니다.",
      ],
    },
    {
      name: "Zustand",
      image: "/zustand.svg",
      desc: [
        "인증/인가의 정보가 전역적으로 필요할 때 이를 관리하였습니다.",
        "Persist를 활용하여 새로고침 후에도 정보를 유지할 수 있도록 구현해본 경험이 있습니다.",
      ],
    },
    {
      name: "Axios",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      desc: [
        "HTTP 요청을 다룰 때 사용해본 경험이 있습니다.",
        "Interseptor를 통해 인증/인가 정보를 쉽게 관리 할 수 있도록 구현해본 경험이 있습니다.",
      ],
    },
    {
      name: "Redux",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      desc: [
        "전역 상태에 대해 공부 할 때 처음 접한 라이브러리로 짧게나마 사용해본 경험이 있습니다.",
      ],
    },
  ],
  etc: [
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      desc: [
        "PR, 커밋 을 템플릿을 통해 관리해본 경험이 있습니다.",
        "Hysky를 활용하여 Git hook을 설정하여 관리해본 경험이 있습니다.",
      ],
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      desc: ["Js로 서버를 구현할 때 번들러로 사용하여 다뤄본 경험이 있습니다."],
    },
    {
      name: "Supabase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      desc: ["간단한 프로젝트에서 DB로 활용해보았습니다."],
    },
    {
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      desc: [
        "학부생때 수업에서 간단하게 배웠습니다.",
        "실무에서 다수 접해보며 미숙하게나마 이해도가 있습니다.",
      ],
    },
    {
      name: "jsonwebtoken",
      image: "/jwt.svg",
      desc: [
        "토큰을 이용한 인증/인가를 직접 구현한 경험이 있습니다.",
        "쿠키에 토큰을 저장하여 클라이언트의 인증을 관리해본 경험이 있습니다.",
      ],
    },
  ],
});

export const categories: SkillCategory[] = ["language", "frontend", "etc"];
