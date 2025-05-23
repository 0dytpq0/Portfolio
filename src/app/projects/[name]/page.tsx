import ProjectPanels from './_ui/ProjectPanels';
import { PROJECT } from '@/shared';

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const projectIdx = PROJECT.findIndex((project) => project.name === name);

  return <ProjectPanels projectIdx={projectIdx} projectList={PROJECT} />;
}

