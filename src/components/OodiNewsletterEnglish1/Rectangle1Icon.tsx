import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1741 861' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1738.61 0H2C0.89543 0 0 0.89543 0 2V859C0 860.105 0.89543 861 2 861H1738.61C1739.71 861 1740.61 860.105 1740.61 859V2C1740.61 0.89543 1739.71 0 1738.61 0Z'
      fill='#5B0AD9'
    />
  </svg>
);
const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
