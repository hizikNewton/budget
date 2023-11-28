import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={3}
    fill="none"
    {...props}
  >
    <circle cx={1.5} cy={1.5} r={1.5} fill="#707480" />
    <circle cx={6.5} cy={1.5} r={1.5} fill="#707480" />
    <circle cx={11.5} cy={1.5} r={1.5} fill="#707480" />
  </svg>
);
export default SvgMenu;
