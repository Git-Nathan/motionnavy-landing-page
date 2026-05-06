import Image from 'next/image';

export function HeroSectionFrame() {
  return (
    <div className='relative flex aspect-square size-full items-center justify-center overflow-hidden rounded-2xl bg-[#181D8C]/30 transition-all duration-200'>
      <div className='relative h-8/9 w-8/9 overflow-hidden shadow-2xl shadow-black/25'>
        <Image
          className='rounded-2xl object-cover'
          src='/images/hero-section-image.webp'
          alt='Hero Section Image'
          fill
          sizes='(max-width: 768px) 80vw, 48vw'
        />
      </div>
    </div>
  );
}
