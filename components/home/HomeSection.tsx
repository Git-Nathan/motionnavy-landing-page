'use client';

import { Section } from '@/layouts/Section';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { AppLink } from '../common/button/AppLink';
import { ColorText } from '../common/ColorText';
import { Tag } from '../common/Tag';
import { ScaleInMotion } from '../motion-animation/ScaleInMotion';
import { HeroSectionFrame } from './HeroSectionFrame';

export const HomeSection = () => {
  return (
    <Section
      id='home'
      wrapperProps={{
        className:
          'relative mt-24 flex w-full flex-col items-center justify-between lg:mt-0 lg:h-screen lg:flex-row lg:pb-[6vh]',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, duration: 0.6 }}
        className='z-10 flex flex-1 flex-col items-start justify-center pe-8 lg:pe-12'
      >
        <div className='max-w-xl'>
          <Tag className='px-3 font-bold'>MotionNavy</Tag>
          <ColorText elements='h1' className='mt-5 text-xl font-bold tracking-tighter md:text-4xl'>
            Transforming Raw Footage into High-Impact, Viral Property Tours.
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
            <AppLink className='px-5 text-lg' href='#about-me' scrollOffset={180}>
              View My Videos
            </AppLink>
          </div>
        </div>
      </motion.div>

      <ScaleInMotion
        className='relative w-[80vw] max-w-125 flex-1 pb-3 lg:pb-0'
        delay={3.2}
        duration={1.2}
      >
        <HeroSectionFrame />
      </ScaleInMotion>
    </Section>
  );
};
