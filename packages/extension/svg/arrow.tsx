import * as React from "react"
import { SVGProps } from "react"

const ArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}>
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#EEE"
        fillOpacity={0.933}
        d="M11 5.825 6.4 10.4 5 9l7-7 7 7-1.4 1.425-4.6-4.6V13h-2V5.825ZM11 18v-3h2v3h-2Zm0 4v-2h2v2h-2Z"
      />
    </g>
  </svg>
)
export default ArrowSVG
