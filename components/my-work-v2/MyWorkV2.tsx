'use client';

import { Section } from '@/layouts/Section';
import Image from 'next/image';
import { useState } from 'react';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

const WORK_VIDEOS = [
  { id: 'aNtYWHDnaPA', category: 'Real Estate', title: 'Real Estate showcase edit' },
  { id: 'ssR1nbObpJc', category: 'Commercial / Brand', title: 'Commercial and brand edit' },
  { id: 'MKQ6KL851TE', category: 'Events / Wedding', title: 'Events and wedding edit' },
];

function WorkCard({ video }: { video: (typeof WORK_VIDEOS)[number] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='flex w-full flex-col gap-3'>
      <div
        className='relative w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-[0px_8px_24px_rgba(149,157,165,0.25)]'
        style={{ aspectRatio: '9/16' }}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='absolute top-0 left-0 h-full w-full'
          />
        ) : (
          <button
            type='button'
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
            className='group absolute inset-0 h-full w-full cursor-pointer'
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              fill
              sizes='(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw'
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
            />
            <span className='absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent' />
            <span className='absolute inset-0 flex items-center justify-center'>
              <span className='flex h-14 w-14 items-center justify-center rounded-full bg-white/15 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.35)] backdrop-blur-md transition-all duration-200 group-hover:scale-110 group-hover:bg-white/25'>
                <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                  className='ml-0.5 h-6 w-6 text-white'
                >
                  <path d='M8 5.14v13.72a.5.5 0 0 0 .76.43l11.02-6.86a.5.5 0 0 0 0-.86L8.76 4.71a.5.5 0 0 0-.76.43Z' />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <p className='text-main text-center text-base font-bold lg:text-lg'>{video.category}</p>
    </div>
  );
}

export function MyWorkV2() {
  return (
    <Section
      className='mt-25 lg:mt-[33vh]'
      wrapperProps={{
        className: 'flex flex-col w-full',
      }}
      id='my-work-v2'
    >
      <FadeIn direction='up'>
        <ColorText elements='h2' className='font-bold tracking-tighter' underlineHoverEffect>
          Featured Work
        </ColorText>
      </FadeIn>

      <FadeIn direction='up'>
        <p className='mt-4 max-w-140 text-center text-lg'>
          Different stories. Different styles. One standard of execution.
        </p>
      </FadeIn>

      <FadeIn direction='up'>
        <p className='mt-2 max-w-140 text-center text-lg text-neutral-600'>
          Explore selected projects across real estate, brands, events, hospitality and more.
        </p>
      </FadeIn>

      <div className='mt-10 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
        {WORK_VIDEOS.map((video) => (
          <FadeIn
            key={video.id}
            direction='up'
            className='flex h-full w-full max-w-90 flex-col rounded-xl bg-[#181D8C]/30 p-4 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1'
          >
            <WorkCard video={video} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
