'use client';

import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'solid' | 'text' | 'secondary';
};

export function Button({ children, className, icon, endIcon, ...props }: IButtonProps) {
  return (
    <button
      className={cn(
        'bg-main cursor-pointer rounded-full font-medium text-white shadow-lg transition-all duration-200 ease-in-out hover:scale-105',
        className,
      )}
      {...props}
    >
      {icon}
      {children}
      {endIcon}
    </button>
  );
}
