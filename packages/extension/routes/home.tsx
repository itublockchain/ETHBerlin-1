import React from "react"

import useRouter from "~hooks/useRouter"
import { useUser } from "~hooks/useUser"
import ArrowSVG from "~svg/arrow"

const Home = () => {
  const { user } = useUser()

  const { navigate } = useRouter()

  return (
    <div>
      <h2 className="text-center text-white font-bold text-3xl py-6">
        {user.total_balance ?? "$100"}
      </h2>
      <div className="flex items-center justify-center space-x-4 py-3">
        <div
          onClick={() => {
            navigate("/send")
          }}
          className="bg-[#EEEEEE] cursor-pointer items-center justify-center px-2 py-1 rounded-md bg-opacity-50 text-white font-bold flex">
          <ArrowSVG />
          send
        </div>
        <div className="bg-[#EEEEEE] cursor-pointer items-center justify-center px-2 py-1 rounded-md bg-opacity-50 text-white font-bold flex">
          <ArrowSVG className="rotate-[180deg]" />
          receive
        </div>
      </div>
    </div>
  )
}

export default Home
