export interface AboutParagraph {
  text: string;
}

export interface ContactItem {
  label: string;
  value: string;
  link?: string;
}

export const aboutParagraphs: AboutParagraph[] = [
  {
    text: "안녕하세요, 프론트엔드 개발자 박요셉입니다.",
  },
  {
    text: "이타적인 성격과 높은 친화력을 바탕으로 팀원들과 원활하게 소통하며 협업하기 위해 노력합니다.",
  },
  {
    text: "문제를 미리 예방할 수 있도록 고심하며 개발하고, UX/UI를 기반으로 최적의 사용자 경험을 제공하기 위해 노력합니다.",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "rkfnahs12e@gmail.com",
  },
  {
    label: "Phone",
    value: "010-3146-0962",
  },
  {
    label: "GitHub",
    value: "GitHub",
    link: "https://github.com/0dytpq0",
  },
  {
    label: "Blog",
    value: "Blog",
    link: "https://velog.io/@0dytpq0/posts",
  },
];
