import React, { useRef, useState } from "react"

import Input from "~components/input"
import useRouter from "~hooks/useRouter"
import useTotalBalance from "~hooks/useTotalBalance"
import { useUser } from "~hooks/useUser"

const Send = () => {
  const amountRef = useRef<HTMLInputElement>(null)

  const { navigate } = useRouter()

  const { user } = useUser()

  const [totalBalance] = useTotalBalance()

  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState(0)

  return (
    <div className="px-6">
      <h2 className="text-center text-white font-bold text-3xl py-6 ">Send</h2>
      <Input className="w-full" placeholder="enter public adress or ENS" />
      <div className="">
        <span>Asset: </span>
      </div>
      <div className="flex items-center text-white gap-x-[32px] mb-4">
        <span>Amount: </span>
        <div
          onClick={() => {
            amountRef.current?.focus()
          }}
          className="bg-secondary border-[1px]  rounded-md flex-1 flex justify-between items-center px-2 border-white">
          <div>
            <Input
              min={0}
              max={totalBalance}
              onChange={(e) => {
                setAmount(+e.target.value)
              }}
              value={totalBalance}
              ref={amountRef}
              type="number"
              className="border-none pl-0"
            />
            <span>0.0002$</span>
          </div>

          <button
            onClick={(e) => {
              setAmount(totalBalance)
              e.stopPropagation()
            }}
            className=" bg-primary-dark px-2 py-1 text-white rounded-md">
            MAX
          </button>
        </div>
      </div>
      <div className="bg-transparent border-quaternary border-[1px] rounded-md py-2 px-2">
        <h5 className="text-white">Estimated Fee</h5>
        <p className="text-white font-bold">
          Market <span className="text-green-primary">-15sec</span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-[12px] mt-4">
        <button
          onClick={() => {
            navigate("/")
          }}
          className="border-[2px] rounded-lg py-3 text-xl border-primary text-primary font-bold flex-1">
          Cancel
        </button>
        <button className="bg-primary rounded-lg py-3 text-xl text-white font-bold flex-1 self-stretch">
          Next
        </button>
      </div>
    </div>
  )
}

export default Send
