'use client';

import { AvatarBody } from '@/icons/avatar-icon/AvatarBody';
import { LeftEye } from './LeftEye';
import { RightEye } from './RightEye';

export function EyeFollowAvatar() {
  return (
    <div className='bg-main/51 flex w-full max-w-100 items-center justify-center rounded-4xl'>
      <div className='relative flex items-center justify-center'>
        <AvatarBody />
        <LeftEye />
        <RightEye />
        <div id='face-center' className='absolute top-28' />
      </div>
    </div>
  );
}
