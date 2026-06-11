'use client';

import { AppLink } from '@/components/common/button/AppLink';
import { OrderNow } from '@/components/common/button/OrderNow';
import { Logo } from '@/components/header/Logo';
import { MobileSideBar } from './MobileSideBar';

export function Header() {
  return (
    <div className='fixed top-0 z-100 w-full gap-4'>
      <header className='sticky top-0 z-40 mx-auto w-full max-w-7xl py-2 pr-2 pl-2'>
        <div className='inset-0 flex h-14 items-center justify-between overflow-hidden rounded-full border border-white/30 bg-neutral-950/8 ps-3 pe-3 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.2)] backdrop-blur-lg lg:h-18 lg:ps-4 lg:pe-4.5'>
          <Logo />
          <nav className='absolute left-1/2 -translate-x-1/2'>
            <ul className='hidden items-center gap-5 font-medium text-neutral-900 lg:flex'>
              <li>
                <AppLink href='#home'>Home</AppLink>
              </li>
              <li>
                <AppLink href='#why-choose-me' scrollOffset={120}>
                  Why Choose Me
                </AppLink>
              </li>
              <li>
                <AppLink href='#my-work-v2' scrollOffset={100}>
                  My Work
                </AppLink>
              </li>
              {/* <li>
                <AppLink href='#pricing' scrollOffset={130}>
                  Pricing
                </AppLink>
              </li> */}
              <li>
                <AppLink href='#contact'>Contact</AppLink>
              </li>
            </ul>
          </nav>
          <div className='flex items-center gap-2 lg:gap-2'>
            <OrderNow className='block' />
            <MobileSideBar />
          </div>
        </div>
      </header>
    </div>
  );
}
