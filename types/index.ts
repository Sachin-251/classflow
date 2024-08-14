import { Icons } from '@/components/icons';
import { Classroom, User } from '@prisma/client';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}