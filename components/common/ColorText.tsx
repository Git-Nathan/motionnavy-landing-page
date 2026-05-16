'use client';

import { cn } from '@/utils/cn';
import { ElementType, HTMLAttributes } from 'react';

export type IColorTextProps = HTMLAttributes<HTMLElement> & {
  elements: ElementType;
  underlineHoverEffect?: boolean;
};

export function ColorText(props: IColorTextProps) {
  const { elements = 'p', underlineHoverEffect, ...restProps } = props;

  const Component = elements;

  const { className, ...restPropsWithoutClassName } = restProps;

  if (underlineHoverEffect) {
    return (
      <div className='flex w-fit max-w-full flex-col hover:[&_.text-underline]:w-full'>
        <Component
          className={cn('text-main text-2xl lg:text-4xl', className)}
          {...restPropsWithoutClassName}
        />
        <div className='text-underline bg-main mt-1 h-1 w-1/2 rounded-full transition-all duration-200' />
      </div>
    );
  }

  return (
    <Component className={cn('text-main text-4xl', className)} {...restPropsWithoutClassName} />
  );
}
