import type { SVGProps } from 'react';

type LogoIconProps = SVGProps<SVGSVGElement> & {
  isDark?: boolean;
};

export const LogoIcon = ({ isDark = false, ...props }: LogoIconProps) => {
  const baseColor = isDark ? 'white' : 'black';

  return (
    <svg
      width='139'
      height='78'
      viewBox='0 0 139 78'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='51.6302'
        y='73.9148'
        width='54.9438'
        height='54.9438'
        transform='rotate(-160 51.6302 73.9148)'
        fill={baseColor}
        fillOpacity='0.1'
      />
      <rect
        x='49.586'
        y='77.4065'
        width='54.9438'
        height='54.9438'
        transform='rotate(-140 49.586 77.4065)'
        fill={baseColor}
        fillOpacity='0.25'
      />
      <rect
        x='47.1332'
        y={isDark ? '76.2308' : '76.2307'}
        width='54.9438'
        height='54.9438'
        transform={isDark ? 'rotate(-120 47.1332 76.2308)' : 'rotate(-120 47.1332 76.2307)'}
        fill={baseColor}
        fillOpacity='0.4'
      />
      <rect
        x='45.8932'
        y='70.5286'
        width='54.9438'
        height='54.9438'
        transform='rotate(-100 45.8932 70.5286)'
        fill={baseColor}
        fillOpacity='0.55'
      />
      <rect
        x='47.3411'
        y={isDark ? '60.9879' : '60.9878'}
        width='54.9438'
        height='54.9438'
        transform={isDark ? 'rotate(-80 47.3411 60.9879)' : 'rotate(-80 47.3411 60.9878)'}
        fill={baseColor}
        fillOpacity='0.7'
      />
      <rect
        x='51.4516'
        y={isDark ? '49.0018' : '49.0017'}
        width='54.9438'
        height='54.9438'
        transform={isDark ? 'rotate(-60 51.4516 49.0018)' : 'rotate(-60 51.4516 49.0017)'}
        fill={baseColor}
        fillOpacity='0.85'
      />
      <rect
        x='61.0217'
        y='35.3174'
        width='54.9438'
        height='54.9438'
        transform='rotate(-40 61.0217 35.3174)'
        fill='#181D8C'
      />
    </svg>
  );
};
