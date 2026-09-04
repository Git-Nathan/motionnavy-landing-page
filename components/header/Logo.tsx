import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src='/images/logo-v2-removebg.webp'
      alt='MotionNavy'
      width={499}
      height={499}
      priority
      className='mx-3 h-13 w-auto shrink-0 scale-170 drop-shadow-lg'
    />
  );
}
