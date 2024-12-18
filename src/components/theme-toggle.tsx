'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    // Apply cursors on mount and theme change
    document.documentElement.style.cursor = 'url("/assets/Angry_Shadow.png") 8 8, auto';
    const applyHoverCursor = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], select, input[type="submit"], input[type="reset"], input[type="button"], [data-radix-collection-item]');
      clickables.forEach(el => {
        (el as HTMLElement).style.cursor = 'url("/assets/Smile_Shadow.png") 8 8, pointer';
      });
    };

    applyHoverCursor();

    // Create a MutationObserver to watch for new elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          applyHoverCursor();
        }
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-[url('/assets/Smile_Shadow.png')_8_8,pointer] !important">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="[&>*]:cursor-[url('/assets/Smile_Shadow.png')_8_8,pointer]">
        <DropdownMenuItem onClick={() => handleThemeChange('light')} className="cursor-[url('/assets/Smile_Shadow.png')_8_8,pointer] !important">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')} className="cursor-[url('/assets/Smile_Shadow.png')_8_8,pointer] !important">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('system')} className="cursor-[url('/assets/Smile_Shadow.png')_8_8,pointer] !important">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 