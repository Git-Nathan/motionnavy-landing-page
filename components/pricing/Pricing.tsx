import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';

const PRICING_TIERS = [
  {
    key: 'standard',
    name: 'Standard Package',
    price: '1.50',
    per: '/image',
    features: [
      'Basic color correction',
      'Basic trimming & merging',
      'Balance overall colors of the video',
    ],
    recommended: false,
  },
  {
    key: 'cinematic',
    name: 'Cinematic Package',
    price: '3.00',
    per: '/image',
    features: [
      'Advanced Sky Replacement',
      'Object Removal & Patching',
      '24-Hour Express Turnaround',
    ],
    recommended: true,
  },
  {
    key: 'high-end',
    name: 'High-End Package',
    price: '5.00',
    per: '/image',
    features: [
      'Advanced Sky Replacement',
      'Object Removal & Patching',
      '24-Hour Express Turnaround',
    ],
    recommended: false,
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
      <ColorText elements='h2' className='text-4xl font-bold tracking-tighter' underlineHoverEffect>
        Choose Your Package
      </ColorText>

      <p className='mt-4 max-w-170 text-center text-lg'>
        Flexible pricing tiers designed to grow with your business. Choose a package and transform
        your raw footage into viral real estate stories.
      </p>

      <div className='mt-16 flex w-full flex-wrap items-stretch justify-center gap-8'>
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.key}
            className={`relative flex w-full max-w-xs flex-col items-stretch justify-between rounded-xl p-6 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] sm:w-80 lg:w-96 ${
              tier.recommended ? 'bg-[#08106e] text-white' : 'bg-white text-slate-700'
            }`}
          >
            {tier.recommended && (
              <div className='absolute top-4 right-4 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold'>
                MOST POPULAR
              </div>
            )}

            <div>
              <div className='text-sm font-medium tracking-widest text-slate-400'>
                {tier.name.toUpperCase()}
              </div>

              <div className='mt-6 flex items-baseline gap-2'>
                <div
                  className={`text-4xl font-extrabold ${tier.recommended ? 'text-white' : 'text-slate-900'}`}
                >
                  ${tier.price}
                </div>
                <div className={`text-sm ${tier.recommended ? 'text-white/80' : 'text-slate-500'}`}>
                  {tier.per}
                </div>
              </div>

              <ul
                className={`mt-6 space-y-3 ${tier.recommended ? 'text-white/90' : 'text-slate-600'}`}
              >
                {tier.features.map((f) => (
                  <li key={f} className='flex items-start gap-3'>
                    <span className='mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-current'>
                      ✓
                    </span>
                    <span className='text-sm'>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
