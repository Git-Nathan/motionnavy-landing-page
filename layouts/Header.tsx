'use client';

import { AppLink } from '@/components/common/button/AppLink';
import { Logo } from '@/components/header/Logo';
import { FadeIn } from '@/components/motion-animation/FadeIn';
import { ScaleInMotion } from '@/components/motion-animation/ScaleInMotion';
import { MobileSideBar } from './MobileSideBar';

export function Header() {
  return (
    <FadeIn
      direction='down'
      transition={{ delay: 2, duration: 0.6 }}
      className='fixed top-0 z-100 w-full gap-4'
    >
      <header className='sticky top-0 z-40 mx-auto w-full max-w-7xl py-2 pr-2 pl-2'>
        <div className='inset-0 flex h-18 items-center justify-between overflow-hidden rounded-full border border-white/30 bg-neutral-950/8 ps-4 pe-4.5 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.2)] backdrop-blur-lg dark:bg-gray-200/10'>
          <ScaleInMotion delay={2.6}>
            <Logo />
          </ScaleInMotion>
          <nav className='absolute left-1/2 -translate-x-1/2'>
            <ul className='hidden items-center gap-5 font-medium text-neutral-900 lg:flex'>
              <ScaleInMotion as='li' delay={2.75}>
                <AppLink href='#home'>Home</AppLink>
              </ScaleInMotion>
              <ScaleInMotion as='li' delay={2.9}>
                <AppLink href='#about-me' scrollOffset={180}>
                  My Work
                </AppLink>
              </ScaleInMotion>
              <ScaleInMotion as='li' delay={3.05}>
                <AppLink href='#my-work' scrollOffset={100}>
                  Pricing
                </AppLink>
              </ScaleInMotion>
              <ScaleInMotion as='li' delay={3.2}>
                <AppLink href='#contact'>Contact</AppLink>
              </ScaleInMotion>
            </ul>
          </nav>
          <div className='flex items-center gap-2'>
            <MobileSideBar />
            <AppLink
              href='https://www.instagram.com/motionnavy.studio/'
              target='_blank'
              rel='noreferrer'
              className='border-none bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:text-base'
            >
              Message Us on Instagram
            </AppLink>
          </div>
        </div>
      </header>
    </FadeIn>
  );
}
