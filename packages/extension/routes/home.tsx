import React from "react"
import { TfiReload } from "react-icons/tfi"

import HomeToken from "~components/homeToken"
import useRouter from "~hooks/useRouter"
import { useUser } from "~hooks/useUser"
import tokensMock from "~mock/tokens"
import ArrowSVG from "~svg/arrow"

const Home = () => {
  const { user } = useUser()

  const { navigate } = useRouter()

  return (
    <div className="flex h-full flex-col pb-5 basis-0 ">
      <div className="flex items-center justify-between gap-x-4 py-3 px-3">
        <h2 className="text-center text-white font-bold text-3xl py-6">
          {user.balances
            ?.map((balance) => +balance[1])
            .reduce((a, b) => a + b, 0) ?? "$100"}
        </h2>
        <div
          onClick={() => {
            navigate("/send")
          }}
          className="border-primary text-white border-[2px] gap-x-2 cursor-pointer items-center justify-center px-2 py-1 rounded-md bg-opacity-50 font-bold flex">
          <ArrowSVG />
          send
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <h4 className="text-white font-bold px-3 text-xl">Tokens</h4>
        <div className="overflow-auto flex-1  flex flex-col gap-y-4 px-3">
          {tokensMock.map((token) => (
            <HomeToken {...token} key={token.label} />
          ))}
          <div className="min-h-[90px]"></div>
        </div>
        <div className="flex justify-end py-2 px-3">
          <TfiReload color="white" size={16} />
        </div>
        <div className="h-[72px]"></div>
      </div>
    </div>
  )
}

export default Home
