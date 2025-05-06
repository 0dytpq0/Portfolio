import { deepFreeze } from "@/app/shared/lib";
import { MenuItem } from "../_types/rending";

export const menuItems: MenuItem[] = deepFreeze([
  { label: "about", href: "about" },
  { label: "skills", href: "skills" },
  { label: "projects", href: "projects" },
  { label: "more", href: "more" },
]);
