import * as React from "react";
import type { SVGProps } from "react";
const SvgNaira = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#0466C8" fillOpacity={0.2} />
    <path
      fill="#0466C8"
      d="M6.05 15v-3.46H5v-1.036h1.05V9.496H5V8.459h1.05V5h2.845l1.413 3.46h1.649V5h2.01v3.46H15v1.036h-1.033v1.008H15v1.037h-1.033V15h-2.862l-1.45-3.46H8.063V15H6.05m1.94-6.54h.506l-.525-1.345h-.072l.09 1.344m.072 2.044h1.195L8.86 9.496h-.834l.037 1.008m3.097 0h.834l-.037-1.008h-1.213l.416 1.008m.852 2.311h.09l-.072-1.274h-.49l.472 1.274"
    />
  </svg>
);
export default SvgNaira;
