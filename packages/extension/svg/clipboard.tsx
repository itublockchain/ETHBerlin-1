import * as React from "react"
import { type SVGProps } from "react"

const ClipboardSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}>
    <mask
      id="a"
      width={15}
      height={15}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}>
      <path fill="#D9D9D9" d="M0 0h15v15H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#BBB"
        d="M5.625 11.25c-.344 0-.638-.122-.883-.367A1.204 1.204 0 0 1 4.375 10V2.5c0-.344.122-.638.367-.883s.54-.367.883-.367h5.625c.344 0 .638.122.883.367s.367.54.367.883V10c0 .344-.122.638-.367.883a1.204 1.204 0 0 1-.883.367H5.625Zm0-1.25h5.625V2.5H5.625V10Zm-2.5 3.75c-.344 0-.638-.122-.883-.367a1.204 1.204 0 0 1-.367-.883V3.75h1.25v8.75H10v1.25H3.125Z"
      />
    </g>
  </svg>
)
export default ClipboardSVG
