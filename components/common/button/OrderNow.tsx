'use client';

import { cn } from '@/utils/cn';
import { AppLink, IAppLinkProps } from './AppLink';

export function OrderNow({ children = 'Start a Project', className, ...rest }: Partial<IAppLinkProps>) {
  const defaultClasses =
    'hidden border-none bg-black text-sm font-bold text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:block lg:text-lg';

  return (
    <AppLink
      href='https://motionnavy.atlassian.net/jira/software/form/d312f776-a474-4832-8db2-7b9535805c19?atlOrigin=eyJpIjoiOWUxOTZkZjU3MGFiNGZiZTk0YWI2YTgzOWM4ZWIwOTEiLCJwIjoiaiJ9'
      target='_blank'
      rel='noreferrer'
      className={cn(defaultClasses, className)}
      {...rest}
    >
      {children}
    </AppLink>
  );
}

export default OrderNow;
