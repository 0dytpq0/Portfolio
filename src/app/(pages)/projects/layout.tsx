import { PROJECT } from '@/app/shared';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const projectNames = PROJECT.map((p) => p.name).join(', ');
  return {
    title: '프로젝트 | Joseph Park 포트폴리오',
    description: `박요셉(Joseph Park)의 주요 프로젝트: ${projectNames}`,
    keywords: [
      '프로젝트',
      '포트폴리오',
      '박요셉',
      'Joseph Park',
      '프론트엔드',
      'React',
      'Next.js',
      '웹 개발',
      'UI/UX',
    ],
  };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

