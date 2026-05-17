import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

const WORK_VIDEOS = [
  { id: 'axQ3CtsaloA', title: 'YouTube Short 1', direction: 'up' },
  { id: '6Tk-Cc5biEk', title: 'YouTube Short 2', direction: 'up' },
  { id: '3Qkwg35vcv0', title: 'YouTube Short 3', direction: 'up' },
];

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
          My Work
        </ColorText>
      </FadeIn>

      <FadeIn direction='up'>
        <p className='mt-4 max-w-120 text-center text-lg'>
          Experience the motion. Explore our gallery of elite property reveals.
        </p>
      </FadeIn>

      <div className='mt-16 flex w-full flex-wrap items-center justify-evenly gap-4'>
        {WORK_VIDEOS.map((video) => (
          <FadeIn
            key={video.id}
            direction={video.direction as 'left' | 'right'}
            className='flex max-w-90 basis-82 flex-col items-center justify-center rounded-xl bg-[#181D8C]/30 p-4 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'
          >
            <div
              className='relative w-full overflow-hidden rounded-2xl shadow-lg'
              style={{ aspectRatio: '9/16' }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='absolute top-0 left-0 h-full w-full'
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
