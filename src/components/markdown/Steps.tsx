
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  children: ReactNode;
  number: number;
  title?: string;
}

interface StepsProps {
  children: ReactNode;
  className?: string;
}

export function Step({ children, number, title }: StepProps) {
  return (
    <div className="flex gap-4 pb-6">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
          {number}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-semibold mb-2 text-foreground">{title}</h4>
        )}
        <div className="text-sm leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div className={cn('my-6 space-y-0', className)}>
      {children}
    </div>
  );
}
