import CheckCircleIcon from '@/icons/CheckCircleIcon';
import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

const PRICING_TIERS = [
  {
    key: 'standard',
    name: 'Standard Package',
    price: '30',
    price2: '40',
    features: [
      'Basic color correction',
      'Standard transitions',
      'Basic trimming & merging',
      'Balance overall colors of the video',
    ],
    recommended: false,
    direction: 'left',
  },
  {
    key: 'advanced',
    name: 'Advanced Package',
    price: '50',
    price2: '65',
    features: [
      'Improve visual flow between scenes',
      'Smooth trimming paced to transitions',
      'Modify brightness, contrast, exposure, and saturation',
      'Remove unnecessary breaks and pauses',
      'Advanced color adjustment',
    ],
    recommended: true,
    direction: 'right',
  },
  {
    key: 'high-end',
    name: 'High-End Package',
    price: '80',
    price2: '100',
    features: [
      'Fully polished merging & sequencing',
      'Detailed exposure, contrast, and tone control',
      'Cinema-quality color enhancement',
      'Rhythm-based timing and transitions',
      'Designed for high-impact videos',
      'Creative professional editing with dynamic pacing',
      'Professional-grade color grading',
    ],
    recommended: false,
    direction: 'left',
  },
];

export function Pricing() {
  return (
    <Section
      className='mt-25 lg:mt-[33vh]'
      wrapperProps={{
        className: 'flex flex-col w-full',
      }}
      id='pricing'
    >
      <FadeIn direction='up'>
        <ColorText elements='h2' className='font-bold tracking-tighter' underlineHoverEffect>
          Choose Your Package
        </ColorText>
      </FadeIn>

      <FadeIn direction='up'>
        <p className='mt-4 max-w-170 text-center text-lg'>
          Flexible pricing tiers designed to grow with your business. Choose a package and transform
          your raw footage into viral real estate stories.
        </p>
      </FadeIn>

      <div className='mt-16 flex w-full flex-wrap items-end justify-center gap-8'>
        {PRICING_TIERS.map((tier) => (
          <FadeIn
            key={tier.key}
            direction={tier.direction as 'left' | 'right'}
            className={`relative flex h-fit w-full max-w-xs flex-col items-stretch justify-between rounded-xl p-6 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] sm:w-80 lg:w-96 ${
              tier.recommended ? 'bg-[#08106e] text-white' : 'bg-white text-slate-700'
            }`}
          >
            {tier.recommended && (
              <div className='absolute top-5.5 right-4 rounded-md bg-white/10 px-3 py-1'>
                <div className='bg-linear-to-r from-pink-500 via-lime-600 to-sky-400 bg-clip-text text-xs font-bold tracking-tighter text-transparent'>
                  MOST POPULAR
                </div>
              </div>
            )}

            <div>
              <div className='text-sm font-medium tracking-widest text-slate-400'>
                {tier.name.toUpperCase()}
              </div>

              <div className='mt-3 flex flex-col gap-2'>
                <div className='flex items-baseline gap-1'>
                  <div
                    className={`text-4xl font-extrabold ${tier.recommended ? 'text-white' : 'text-slate-900'}`}
                  >
                    ${tier.price}
                  </div>
                  <div
                    className={`text-sm ${tier.recommended ? 'text-white/80' : 'text-slate-500'}`}
                  >
                    /video under 90s
                  </div>
                </div>
                <div className='flex items-baseline gap-1'>
                  <div
                    className={`text-4xl font-extrabold ${tier.recommended ? 'text-white' : 'text-slate-900'}`}
                  >
                    ${tier.price2}
                  </div>
                  <div
                    className={`text-sm ${tier.recommended ? 'text-white/80' : 'text-slate-500'}`}
                  >
                    /video over 90s
                  </div>
                </div>
              </div>
            </div>

            <ul
              className={`mt-6 space-y-3 ${tier.recommended ? 'text-white/90' : 'text-slate-600'}`}
            >
              {tier.features.map((f) => (
                <li key={f} className='flex items-start gap-3'>
                  <CheckCircleIcon className='shrink-0 -translate-y-0.5' />
                  <span className='text-sm'>{f}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
