// 기술 결정 타입 정의
interface TechDecision {
  name: string;
  reasons: string[];
}

// 문제 해결 타입 정의
interface Problem {
  title: string;
  reason: string;
  solve: string[];
  image: string;
}

// 프로젝트 타입 정의
export interface ProjectItem {
  name: string;
  duration: string;
  gitHub: string;
  address?: string;
  notion: string;
  description: string;
  images: string[];
  skills: string[];
  tasks: string[];
  techDecision: TechDecision[];
  problems?: Problem[];
}
