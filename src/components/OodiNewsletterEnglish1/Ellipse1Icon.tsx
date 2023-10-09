import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 527 527' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M527 263.5C527 117.973 409.027 0 263.5 0C117.973 0 0 117.973 0 263.5C0 409.027 117.973 527 263.5 527C409.027 527 527 409.027 527 263.5Z'
      fill='white'
      fillOpacity={0.22}
    />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
