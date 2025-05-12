'use client';

import { AboutSection } from './aboutSection/_ui/AboutSection';
import MoreSection from './moreSection/_ui/MoreSection';
import { ProjectSection } from './projectSection/_ui/ProjectSection';
import { MainSection } from './rendingSection/_ui/MainSection';
import { SkillsSection } from './skillsSection/_ui/SkillsSection';

export default function Home() {
  return (
    <div className='w-full font-hahmlet overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-[100dvh] bg-black'>
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <MoreSection />
    </div>
  );
}
