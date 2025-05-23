import { AboutSection } from './_aboutSection/_ui/AboutSection';
import MoreSection from './_moreSection/_ui/MoreSection';
import NeonParticles from './_neonParticle/_ui/NeonParticles';
import { ProjectSection } from './_projectSection/_ui/ProjectSection';
import { RendingSection } from './_rendingSection/_ui/RendingSection';
import { SkillsSection } from './_skillsSection/_ui/SkillsSection';

export default function Home() {
  return (
    <div className='w-full font-hahmlet overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-[100dvh] bg-black'>
      <NeonParticles />
      <RendingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <MoreSection />
    </div>
  );
}
