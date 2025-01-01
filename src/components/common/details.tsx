import { Tool } from '@components/misc/tools';
import { ColoredBadge } from './colored-badge';
import './details.css';

export function DetailsTechStack({ stack }: { stack: Tool[] }) {
  return (
    <details className="mt-4">
      <summary className="text-xs font-semibold text-primary">
        <span className="ml-2">Show tech stack</span>
      </summary>
      <div className="mt-2 flex flex-wrap gap-2 pb-2 text-xs font-medium text-muted-foreground">
        {stack.map(tool => (
          <ColoredBadge key={tool} text={tool} />
        ))}
      </div>
    </details>
  );
}
