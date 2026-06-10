'use client';

import { Section } from '@/layouts/Section';
import { AppLink } from '../common/button/AppLink';
import { OrderNow } from '../common/button/OrderNow';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

export const Contact = () => {
  return (
    <Section className='h-screen' id='contact'>
      <FadeIn direction='up'>
        <ColorText elements='h2' className='font-bold tracking-tighter' underlineHoverEffect>
          Ready to Elevate Your Visuals?
        </ColorText>
      </FadeIn>
      <FadeIn as='p' className='mt-6 max-w-130 text-center text-lg'>
        Skip the generic pricing tiers. Talk directly with our creative team to get a personalized
        proposal tailored exactly to your brand&apos;s needs.
      </FadeIn>

      <FadeIn className='mt-6 flex flex-col items-center gap-4'>
        <AppLink
          href='https://www.instagram.com/motionnavy.studio/'
          target='_blank'
          rel='noreferrer'
          className='border-none bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:text-lg'
        >
          Message Us on Instagram
        </AppLink>

        <FadeIn as='p' className='mt-6 max-w-130 text-center text-lg'>
          Worked with us before?
        </FadeIn>

        <OrderNow className='block' />
      </FadeIn>
    </Section>
  );
};
