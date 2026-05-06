import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';

const WORK_VIDEOS = [
  { id: 'M0BsRedTPp8', title: 'YouTube Short 1' },
  { id: 'YO5O-y4ihyo', title: 'YouTube Short 2' },
  { id: 'UcPriL62Pkk', title: 'YouTube Short 3' },
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
      <ColorText elements='h2' className='text-4xl font-bold tracking-tighter' underlineHoverEffect>
        My Work
      </ColorText>

      <p className='mt-4 max-w-120 text-center text-lg'>
        Experience the motion. Explore our gallery of elite property reveals.
      </p>

      <div className='mt-16 flex w-full flex-wrap items-center justify-evenly gap-6'>
        {WORK_VIDEOS.map((video) => (
          <div
            key={video.id}
            className='flex w-80 max-w-90 flex-col items-center justify-center rounded-xl bg-neutral-50 p-4 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'
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
          </div>
        ))}
      </div>
    </Section>
  );
}
