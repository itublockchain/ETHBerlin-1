import React from "react"

import useRouter from "~hooks/useRouter"
import HomeSVG from "~svg/home"
import SettingsSVG from "~svg/settings"
import WalletSVG from "~svg/wallet"

const BarButton: React.FC<{
  path: string
  icon: React.ReactElement
}> = ({ icon, path }) => {
  const { navigate, path: routePath } = useRouter()

  return (
    <button
      className={`${path !== routePath ? "opacity-50" : "opacity-100"}`}
      onClick={() => {
        navigate(path)
      }}>
      {icon}
    </button>
  )
}

const BottomBar = () => {
  return (
    <div className="bg-[#393E46] bg-opacity-50 backdrop-blur-sm shadow-md py-3 px-2 flex items-center justify-center gap-x-[64px]">
      <BarButton icon={<HomeSVG />} path="/" />
      <BarButton icon={<WalletSVG />} path="/wallet" />
      <BarButton icon={<SettingsSVG />} path="/settings" />
    </div>
  )
}

export default BottomBar
