import { SkillItem as SkillItemType } from "../_types";
import { SkillItem } from "./SkillItem";

interface SkillsContentProps {
  skills: SkillItemType[];
}

export function SkillsContent({ skills }: SkillsContentProps) {
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
