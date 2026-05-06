'use client';

export type IColorButtonProps = {
  color: string;
};

export function ColorButton(props: IColorButtonProps) {
  const { color } = props;

  return (
    <button
      className='flex size-8 cursor-pointer items-center justify-center rounded-full shadow-lg'
      style={{ backgroundColor: color }}
    >
      <div className='flex size-6 items-center justify-center rounded-full bg-white' />
    </button>
  );
}
