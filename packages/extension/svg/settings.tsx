import * as React from "react"
import { SVGProps } from "react"

const SettingsSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <path
      fill="#D9D9D9"
      d="m16 1.333 12.667 7.334v14.666L16 30.667 3.333 23.333V8.667L16 1.333Zm0 3.082L6 10.204v11.592l10 5.79 10-5.79V10.204l-10-5.79Zm0 16.918a5.333 5.333 0 1 1 0-10.667 5.333 5.333 0 0 1 0 10.667Zm0-2.666a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"
    />
  </svg>
)
export default SettingsSVG
