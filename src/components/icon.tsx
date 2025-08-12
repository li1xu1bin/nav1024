'use client';

import { icons, type IconName } from '@/lib/data';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon {...props} />;
}
