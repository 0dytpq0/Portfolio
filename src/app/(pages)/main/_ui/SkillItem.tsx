import Image from "next/image";
import { SkillItem as SkillItemType } from "../_types";

interface SkillItemProps {
  skill: SkillItemType;
}

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="flex gap-x-4 items-center" key={skill.name}>
      <Image src={skill.image} alt={skill.name} width={50} height={50} />
      <ul className="flex-1 text-sm">
        {skill.desc.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
}
