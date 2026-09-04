import { BarcodeIcon } from '@/icons/BarcodeIcon';
import { BuildingIcon } from '@/icons/BuildingIcon';
import { FlashIcon } from '@/icons/FlashIcon';
import { MessageIcon } from '@/icons/MessageIcon';
import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

const features = [
  {
    id: 'cinematic-storytelling',
    title: 'Cinematic Storytelling',
    description:
      'Every edit is shaped around the story, mood and purpose of the project — not just a sequence of cuts.',
    icon: <BuildingIcon className='text-main h-8 w-8' />,
    direction: 'right',
  },
  {
    id: 'fast-reliable-turnaround',
    title: 'Fast & Reliable Turnaround',
    description:
      'A streamlined workflow helps projects move quickly while maintaining consistency and quality.',
    icon: <FlashIcon className='text-main h-8 w-8' />,
    direction: 'left',
  },
  {
    id: 'sound-motion-detail',
    title: 'Sound, Motion & Detail',
    description:
      'Sound design, motion graphics, pacing and visual polish give each project its own character.',
    icon: <BarcodeIcon className='text-main h-8 w-8' />,
    direction: 'right',
  },
  {
    id: 'built-for-different-stories',
    title: 'Built for Different Stories',
    description:
      'Real estate, weddings, hospitality, events and commercial content — each edit is adapted to the audience, platform and brand.',
    icon: <MessageIcon className='text-main h-8 w-8' />,
    direction: 'left',
  },
];

export function WhyChooseMe() {
  return (
    <Section
      className='mt-23 lg:mt-0'
      wrapperProps={{
        className: 'flex w-full flex-col',
      }}
      id='why-choose-me'
    >
      <FadeIn direction='up'>
        <ColorText
          elements='h2'
          className='text-center font-bold tracking-tighter'
          underlineHoverEffect
        >
          Why MotionNavy?
        </ColorText>
      </FadeIn>

      <FadeIn direction='up'>
        <p className='mt-4 max-w-160 text-center text-lg'>
          We combine storytelling, pacing, sound and visual detail to turn raw footage into polished
          content built for the way your audience watches.
        </p>
      </FadeIn>

      <div className='mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16'>
        {features.map((feature) => (
          <FadeIn
            key={feature.id}
            direction={feature.direction as 'left' | 'right'}
            className='h-full'
          >
            <div className='flex h-full flex-col gap-4 rounded-2xl bg-neutral-50 p-8 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'>
              <div className='flex h-16 w-16 items-center justify-center rounded-xl bg-gray-200'>
                {feature.icon}
              </div>
              <h3 className='text-main text-2xl font-bold'>{feature.title}</h3>
              <p className='text-base text-neutral-600'>{feature.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
