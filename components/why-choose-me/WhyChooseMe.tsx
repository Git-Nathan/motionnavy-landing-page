import { BarcodeIcon } from '@/icons/BarcodeIcon';
import { BuildingIcon } from '@/icons/BuildingIcon';
import { FlashIcon } from '@/icons/FlashIcon';
import { MessageIcon } from '@/icons/MessageIcon';
import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';

const features = [
  {
    id: 'cinematic-flow',
    title: 'Designed for Cinematic Flow',
    description:
      'Every frame is meticulously timed to eliminate dead space, keeping potential buyers engaged with a seamless, high-end property experience.',
    icon: <BuildingIcon className='text-main h-8 w-8' />,
  },
  {
    id: 'fast-turnaround',
    title: 'Fast Turnaround',
    description:
      "Professional edits returned within 12–24 hours, because we know in real estate, every hour a listing isn't online is a missed opportunity.",
    icon: <FlashIcon className='text-main h-8 w-8' />,
  },
  {
    id: 'immersive-storytelling',
    title: 'Immersive Property Storytelling',
    description:
      "We don't just show rooms; we sell a lifestyle through fluid motion, perfect lighting enhancement, and a truly cinematic atmosphere.",
    icon: <BarcodeIcon className='text-main h-8 w-8' />,
  },
  {
    id: 'virtual-staging-2',
    title: 'Virtual Staging',
    description:
      'Hyper-realistic 3D furniture placement that respects spatial geometry and lighting, turning vacant rooms into luxury living spaces.',
    icon: <MessageIcon className='text-main h-8 w-8' />,
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
      <ColorText elements='h2' className='text-4xl font-bold tracking-tighter' underlineHoverEffect>
        Why Choose MotionNavy?
      </ColorText>

      <p className='mt-4 max-w-160 text-center text-lg'>
        Because every square foot of your property has a story that deserves to be told with
        cinematic precision.
      </p>

      {/* <Image
        src={'/images/final-cut-screen.png'}
        alt='Product Image'
        width={1200}
        height={806}
        className='mt-10 h-auto rounded-3xl px-1'
      /> */}

      <div className='mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
        {features.map((feature) => (
          <div
            key={feature.id}
            className='flex flex-col gap-4 rounded-2xl bg-neutral-50 p-8 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'
          >
            <div className='flex h-16 w-16 items-center justify-center rounded-xl bg-gray-200'>
              {feature.icon}
            </div>
            <h3 className='text-main text-2xl font-bold'>{feature.title}</h3>
            <p className='text-base text-neutral-600'>{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
