import { Badge } from './badge';

type Tool = 'TypeScript' | 'JavaScript' | 'HTML5' | 'CSS3' | 'Next.js' | 'Supabase' | 'TailwindCSS' | 'React';

const COLORS: Record<Tool, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#f7df1e',
  HTML5: '#e44d26',
  CSS3: '#2062af',
  'Next.js': '#181818',
  Supabase: '#3ecf8e',
  TailwindCSS: '#35bef8',
  React: '#00d8ff',
};

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
      className={'whitespace-nowrap border-2'}
      style={{
        backgroundColor: color ?? '',
        color: color ? '#fff' : '',
      }}
    >
      {text}
    </Badge>
  );
}
