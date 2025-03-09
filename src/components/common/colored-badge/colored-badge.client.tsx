'use client';

import { Tool } from '@components/misc/tools';
import { Badge } from '../badge';
import { COLORS } from '@components/misc/colors';
import { cn } from '@lib/utils';
import { useTheme } from 'next-themes';

type ColoredBadgeProps = {
  text: Tool;
};

export default function ColoredBadge({ text }: ColoredBadgeProps) {
  const theme = useTheme().resolvedTheme as 'dark' | 'light';
  const color = COLORS[text][theme];

  return (
    <Badge
      className={cn(`cursor-default whitespace-nowrap border-2`, color.borderColor, color.bgColor, color.textColor)}
    >
      {text}
    </Badge>
  );
}
