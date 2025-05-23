import ProjectPanels from './ProjectPanels';
import { PROJECT } from '@/app/shared';

export default function ProjectsPage({ params }: { params: { name: string } }) {
  const { name } = params;
  const projectIdx = PROJECT.findIndex((project) => project.name === name);

  return <ProjectPanels projectIdx={projectIdx} projectList={PROJECT} />;
}

