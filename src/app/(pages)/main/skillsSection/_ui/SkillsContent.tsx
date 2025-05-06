import { SkillItem as SkillItemProps } from "../_types/skills";
import { SkillItem } from "./SkillItem";

export function SkillsContent({ skills }: { skills: SkillItemProps[] }) {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 gap-4">
        {skills?.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
