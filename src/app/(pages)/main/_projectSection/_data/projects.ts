import { ProjectItem } from "../_types/project";
import { deepFreeze } from "@/app/shared/lib";

export const projects: ProjectItem[] = deepFreeze([
  {
    name: "Travel Story",
    title: "여행 기록 웹사이트",
    description:
      "여행 경험을 공유하고 기록할 수 있는 플랫폼입니다. 사용자들이 자신의 여행 이야기를 작성하고 사진과 함께 공유할 수 있습니다. 반응형 디자인으로 모바일에서도 편리하게 사용 가능합니다.",
    images: [
      "/travelstory/main.webp",
      "/travelstory/detail.webp",
      "/travelstory/list.webp",
      "/travelstory/review.webp",
      "/travelstory/plan.webp",
    ],
    github: "https://github.com/0dytpq0/final-project-b1",
    site: "https://final-project-b1.vercel.app/",
    more: "",
  },
  {
    name: "Portfolio",
    title: "개인 포트폴리오 사이트",
    description: "토이 프로젝트로 진행했던 기존 개인 포트폴리오 사이트입니다.",
    images: ["/travelstory/review.webp", "/travelstory/plan.webp"],
    github: "https://github.com/0dytpq0/js_portfoilio",
    site: "https://js-portfoilio.vercel.app/",
    more: "",
  },
]);
