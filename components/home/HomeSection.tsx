'use client';

import { Section } from '@/layouts/Section';
import { Typewriter } from 'react-simple-typewriter';
import { AppLink } from '../common/button/AppLink';
import { ColorText } from '../common/ColorText';
import { Tag } from '../common/Tag';
import { HeroSectionFrame } from './HeroSectionFrame';

export const HomeSection = () => {
  return (
    <Section
      id='home'
      wrapperProps={{
        className:
          'relative mt-26 flex w-full flex-col items-center justify-between lg:mt-0 lg:h-screen lg:flex-row lg:pb-[6vh] gap-12',
      }}
    >
      <div className='z-10 flex flex-1 flex-col items-start justify-center lg:pe-12'>
        <div className='max-w-xl'>
          <Tag className='px-3 font-bold'>MotionNavy</Tag>
          <ColorText elements='h1' className='mt-5 text-xl font-bold tracking-tighter md:text-4xl'>
            Transforming Raw Footage into High-Impact,
            <br />
            Viral Property Tours.
            <br />
          </ColorText>
          <div className='mt-4 min-h-10 text-xl leading-7 font-semibold lg:text-3xl'>
            <Typewriter
              words={[
                'Cinematic Property Reveals',
                'Eliminate the Dead Space',
                'Maximize Viewer Retention',
                'Sell the Lifestyle',
              ]}
              cursor
              loop
            />
          </div>
          <p className='mt-2 text-lg'>
            At MotionNavy, we transform raw property footage into high-end, viral cinematic
            experiences. From high-octane speed ramping to professional-grade color grading.
          </p>
          <div className='mt-6 flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
            <AppLink className='px-5' href='#my-work-v2' scrollOffset={100}>
              View My Videos
            </AppLink>
          </div>
        </div>
      </div>

      <div className='relative w-[80vw] max-w-125 flex-1 pb-3 lg:pb-0'>
        <HeroSectionFrame />
      </div>
    </Section>
  );
};
