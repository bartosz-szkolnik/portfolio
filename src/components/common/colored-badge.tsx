import { Tool } from '@components/misc/tools';
import { Badge } from './badge';
import { COLORS } from '@components/misc/colors';
import { cn } from '@lib/utils';

type ColoredBadgeProps = {
  text: Tool | (string & {});
  variant?: 'default' | 'outline';
};

const isPredefined = (text: string): text is Tool => Object.keys(COLORS).includes(text);

export function ColoredBadge({ text, variant = 'default' }: ColoredBadgeProps) {
  const color = isPredefined(text) ? COLORS[text] : null;

  return (
    <Badge
      variant={color ? variant : 'secondary'}
      className={cn('whitespace-nowrap border-2', { 'border-gray-400': color?.light.showBorder })}
      style={{
        backgroundColor: color?.light.backgroundColor ?? '',
        color: color?.light.color ?? '',
      }}
    >
      {text}
    </Badge>
  );
}
