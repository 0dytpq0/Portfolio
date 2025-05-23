import ProjectPanels from './ProjectPanels';
import { PROJECT } from '@/app/shared';

interface ProjectsPageProps {
  params: { name: string };
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { name } = params;
  const projectIdx = PROJECT.findIndex((project) => project.name === name);

  return <ProjectPanels projectIdx={projectIdx} projectList={PROJECT} />;
}

