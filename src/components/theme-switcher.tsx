'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@components/common/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/common/dropdown-menu';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            size="icon"
            className="m-0 flex h-12 w-12 items-center justify-center gap-0 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-800"
          >
            <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 fill-slate-950 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-200" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <Moon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100 dark:fill-slate-950" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <Monitor className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100 dark:fill-slate-950" />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
