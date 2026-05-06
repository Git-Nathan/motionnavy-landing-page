'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

type TagProps = HTMLAttributes<HTMLParagraphElement>;

export function Tag(props: TagProps) {
  const { className, children, ...restProps } = props;

  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-base font-medium tracking-tight shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]',
        className,
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}
