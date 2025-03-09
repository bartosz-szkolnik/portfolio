'use client';

import { Tool } from '@components/misc/tools';
import { ColoredBadge } from './colored-badge';
import { Button } from './button';
import { ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

import './details.css';

type DetailsTechStackProps = {
  stack: Tool[];
  additionalStack?: Tool[];
};

export function DetailsTechStack({ stack, additionalStack }: DetailsTechStackProps) {
  const [showAdditional, setShowAdditional] = useState(false);

  const isAdvancedStackAvailable = Boolean(additionalStack);
  const showButton = isAdvancedStackAvailable && !showAdditional;
  const showAdvancedStack = isAdvancedStackAvailable && showAdditional;
  return (
    <>
      <div className="mb-2 mt-4 flex items-center gap-2">
        <h3 className="flex h-6 items-center text-xs font-semibold text-primary">Tech stack:</h3>
        {showButton && (
          <Button
            className="text-xs font-semibold text-primary"
            variant="ghost"
            size="xs"
            onClick={() => setShowAdditional(true)}
          >
            Show additional stack <ChevronRightIcon />
          </Button>
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-2 pb-2 text-xs font-medium text-muted-foreground">
        {stack.map(tool => (
          <ColoredBadge key={tool} text={tool} />
        ))}
        {showAdvancedStack && additionalStack!.map(tool => <ColoredBadge key={tool} text={tool} />)}
      </div>
      {/* <details className="mt-1 cursor-pointer">
        <summary className="text-xs font-semibold text-primary">
          <span className="ml-2">Show additional tech stack</span>
        </summary>
        <div className="mt-2 flex flex-wrap gap-2 pb-2 text-xs font-medium text-muted-foreground">
          {stack.map(tool => (
            <ColoredBadge key={tool} text={tool} />
          ))}
        </div>
      </details> */}
    </>
  );
}
