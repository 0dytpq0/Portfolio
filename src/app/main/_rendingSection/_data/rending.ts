import { deepFreeze } from '@/shared/lib';
import { MenuItem } from '../_types/rending';

export const menuItems: MenuItem[] = deepFreeze([
  { label: 'about', href: 'about' },
  { label: 'skills', href: 'skills' },
  { label: 'projects', href: 'projects' },
]);
