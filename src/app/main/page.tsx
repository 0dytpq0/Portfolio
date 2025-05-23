import dynamic from 'next/dynamic';
import NeonParticles from './_neonParticle/_ui/NeonParticles';
const ProjectSection = dynamic(
  () => import('./_projectSection/_ui/ProjectSection')
);
const RendingSection = dynamic(
  () => import('./_rendingSection/_ui/RendingSection')
);
const AboutSection = dynamic(() => import('./_aboutSection/_ui/AboutSection'));
const SkillsSection = dynamic(
  () => import('./_skillsSection/_ui/SkillsSection')
);
const EndSection = dynamic(() => import('./_endSection/_ui/EndSection'));

export default function Home() {
  return (
    <div className='w-full font-hahmlet overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-[100dvh] bg-black'>
      <NeonParticles />
      <RendingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <EndSection />
    </div>
  );
}
