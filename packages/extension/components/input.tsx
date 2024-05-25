import { forwardRef } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export type Ref = HTMLInputElement

const Input = forwardRef<Ref, Props>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`bg-secondary border-quaternary border-[1px] outline-none placeholder:text-quaternary placeholder:text-opacity-50 py-3 px-2 rounded-md text-white font-bold ${props.className ?? ""}`}
    />
  )
})

export default Input
