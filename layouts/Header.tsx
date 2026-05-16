'use client';

import { AppLink } from '@/components/common/button/AppLink';
import { Logo } from '@/components/header/Logo';
import { MobileSideBar } from './MobileSideBar';

export function Header() {
  return (
    <div className='fixed top-0 z-100 w-full gap-4'>
      <header className='sticky top-0 z-40 mx-auto w-full max-w-7xl py-2 pr-2 pl-2'>
        <div className='inset-0 flex h-18 items-center justify-between overflow-hidden rounded-full border border-white/30 bg-neutral-950/8 ps-4 pe-4.5 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.2)] backdrop-blur-lg'>
          <Logo />
          <nav className='absolute left-1/2 -translate-x-1/2'>
            <ul className='hidden items-center gap-5 font-medium text-neutral-900 lg:flex'>
              <li>
                <AppLink href='#home'>Home</AppLink>
              </li>
              <li>
                <AppLink href='#my-work-v2' scrollOffset={100}>
                  My Work
                </AppLink>
              </li>
              <li>
                <AppLink href='#pricing' scrollOffset={130}>
                  Pricing
                </AppLink>
              </li>
              <li>
                <AppLink href='#contact'>Contact</AppLink>
              </li>
            </ul>
          </nav>
          <div className='flex items-center gap-1 lg:gap-2'>
            <AppLink
              href='https://www.instagram.com/motionnavy.studio/'
              target='_blank'
              rel='noreferrer'
              className='border-none bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:hidden lg:text-base'
            >
              Message Us
            </AppLink>
            <AppLink
              href='https://www.instagram.com/motionnavy.studio/'
              target='_blank'
              rel='noreferrer'
              className='hidden border-none bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:block lg:text-base'
            >
              Message Us on Instagram
            </AppLink>
            <MobileSideBar />
          </div>
        </div>
      </header>
    </div>
  );
}
