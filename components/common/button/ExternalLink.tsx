'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

type ExternalLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: 'solid' | 'icon' | 'color';
};

export const ExternalLink = ({
  href,
  children,
  icon,
  className,
  ...restProps
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'bg-main flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-200 ease-in-out hover:scale-105 lg:text-lg',
        className,
      )}
      {...restProps}
    >
      {children}
      {icon}
    </a>
  );
};
