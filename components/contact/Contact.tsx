'use client';

import { Section } from '@/layouts/Section';
import { AppLink } from '../common/button/AppLink';
import { OrderNow } from '../common/button/OrderNow';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

const INSTAGRAM_URL = 'https://www.instagram.com/motionnavy.studio/';

export const Contact = () => {
  return (
    <Section className='relative h-screen' id='contact'>
      <FadeIn direction='up'>
        <ColorText
          elements='h2'
          className='text-center font-bold tracking-tighter'
          underlineHoverEffect
        >
          Your Footage. Our Edit. Let&apos;s Make It Stand Out.
        </ColorText>
      </FadeIn>

      <FadeIn as='p' className='mt-5 max-w-140 text-center text-lg'>
        From real estate and events to commercial and branded content, tell us what you&apos;re
        working on and we&apos;ll help shape the right edit for it.
      </FadeIn>

      <FadeIn className='mt-7 flex flex-col items-center gap-3'>
        <OrderNow className='block' />

        <AppLink
          href={INSTAGRAM_URL}
          target='_blank'
          rel='noreferrer'
          className='bg-transparent px-2 py-1 text-sm font-medium text-neutral-700 shadow-none hover:text-neutral-900 lg:text-base'
        >
          Prefer to chat first? Message us on Instagram →
        </AppLink>
      </FadeIn>
    </Section>
  );
};
