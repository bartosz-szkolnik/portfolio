import { Tool } from '@components/misc/tools';
import { Badge } from './badge';
import { COLORS } from '@components/misc/colors';
import { cn } from '@lib/utils';

type ColoredBadgeProps = {
  text: Tool | (string & {});
};

const isPredefined = (text: string): text is Tool => Object.keys(COLORS).includes(text);

export function ColoredBadge({ text }: ColoredBadgeProps) {
  const color = isPredefined(text) ? COLORS[text] : null;

  return (
    <Badge
      className={cn(
        `whitespace-nowrap border-2 hover:${color?.light.bgColor} ${color?.light.bgColor}`,
        color?.light.showBorder ? `border-${color.light.borderColor}` : 'border-none',
      )}
      style={{ color: color?.light.color ?? '' }}
    >
      {text}
    </Badge>
  );
}
