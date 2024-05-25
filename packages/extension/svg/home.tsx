import * as React from "react"
import { type SVGProps } from "react"

const HomeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={24}
    fill="none"
    {...props}>
    <path
      fill="#EEE"
      d="M3 21.333h4v-8h8v8h4v-12l-8-6-8 6v12ZM.333 24V8L11 0l10.667 8v16h-9.334v-8H9.667v8H.333Z"
    />
  </svg>
)
export default HomeSVG
