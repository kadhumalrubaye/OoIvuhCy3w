import { memo, SVGProps } from 'react';

const Ellipse1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 560 560' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M280.005 0.889999C434.391 0.889999 559.545 126.053 559.545 280.45C559.545 434.847 434.391 560.01 280.005 560.01C125.619 560.01 0.464996 434.847 0.464996 280.45C0.464996 126.053 125.619 0.889999 280.005 0.889999Z'
      fill='#5FECFF'
      fillOpacity={0.22}
    />
  </svg>
);
const Memo = memo(Ellipse1Icon2);
export { Memo as Ellipse1Icon2 };
