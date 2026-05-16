'use client';

import { Section } from '@/layouts/Section';
import { AppLink } from '../common/button/AppLink';
import { ExternalLink } from '../common/button/ExternalLink';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

export const Contact = () => {
  return (
    <Section className='h-screen' id='contact'>
      <FadeIn direction='up'>
        <ColorText elements='h2' className='font-bold tracking-tighter' underlineHoverEffect>
          Get In Touch
        </ColorText>
      </FadeIn>
      <FadeIn as='p' className='mt-6 max-w-130 text-center text-lg'>
        Get in touch to discover how our signature motion style can redefine your luxury property
        marketing.
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

        <ExternalLink href='mailto:studio@motionnavy.com' variant='color'>
          Contact via Gmail
        </ExternalLink>
      </FadeIn>
    </Section>
  );
};
