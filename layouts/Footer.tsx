'use client';

import { FadeIn } from '@/components/motion-animation/FadeIn';
import { Section } from './Section';

const INSTAGRAM_URL = 'https://www.instagram.com/motionnavy.studio/';

export function Footer() {
  return (
    <Section className='relative' id='contact'>
      <FadeIn
        direction='up'
        className='absolute bottom-12 mt-14 w-full border-t border-neutral-900/10 pt-8 lg:mt-20'
      >
        <div className='flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left'>
          <div className='flex flex-col gap-1'>
            <p className='text-main text-lg font-bold'>MotionNavy Studio</p>
            <p className='text-sm text-neutral-600'>Video Editing &amp; Post-Production</p>
          </div>

          <div className='flex flex-col gap-1 md:items-end'>
            <a
              href='mailto:studio@motionnavy.com'
              className='text-sm text-neutral-700 transition-colors hover:text-neutral-900'
            >
              studio@motionnavy.com
            </a>
            <a
              href={INSTAGRAM_URL}
              target='_blank'
              rel='noreferrer'
              className='text-sm text-neutral-700 transition-colors hover:text-neutral-900'
            >
              Instagram
            </a>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center justify-end gap-2 text-sm text-neutral-500 md:flex-row md:justify-between'>
          <p>&copy; 2026 MotionNavy Studio</p>
        </div>
      </FadeIn>
    </Section>
  );
}
