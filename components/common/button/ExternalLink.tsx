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
  variant = 'solid',
  ...restProps
}: ExternalLinkProps) => {
  const variantStyles = {
    solid:
      'flex shrink-0 items-center gap-2 rounded-full bg-gray-700 px-5 py-2 text-lg font-medium whitespace-nowrap text-white dark:bg-gray-300 dark:text-black',
    icon: 'flex shrink-0 items-center justify-center text-text-gray transition-all duration-200 ease-in-out p-2 rounded-full',
    color: 'px-5 py-2 text-lg font-medium rounded-full bg-main text-white shadow-lg',
  };

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'transition-all duration-200 ease-in-out hover:scale-105',
        variantStyles[variant],
        className,
      )}
      {...restProps}
    >
      {children}
      {icon}
    </a>
  );
};
