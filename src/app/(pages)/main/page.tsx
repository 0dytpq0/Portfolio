import { MainSection, AboutSection, SkillsSection } from "./_ui";

export default function Home() {
  return (
    <div className="w-full font-hahmlet overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-[100dvh]">
      <MainSection />

      <AboutSection />

      <SkillsSection />
    </div>
  );
}
