import * as React from "react"
import { SVGProps } from "react"

const ArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={20}
    fill="none"
    {...props}>
    <path
      fill="#288AE4"
      d="M6 3.825 1.4 8.4 0 7l7-7 7 7-1.4 1.425-4.6-4.6V11H6V3.825ZM6 16v-3h2v3H6Zm0 4v-2h2v2H6Z"
    />
  </svg>
)
export default ArrowSVG
