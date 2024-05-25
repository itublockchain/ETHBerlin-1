import React from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TfiReload } from "react-icons/tfi"

import WalletContainer from "~components/walletContainer"
import { colors } from "~constants"
import walletsMock from "~mock/wallets"

const Wallet = () => {
  return (
    <div className="h-full overflow-hidden  px-4 flex flex-col ">
      <WalletContainer
        amountCurrency="128.56$"
        image=""
        label="AnaCüzdan"
        wallet_address="0x21124124124214124214ce"
      />
      <div className="flex items-center justify-between my-2">
        <h4 className="text-white font-bold  text-xl mt-3">Temp wallets</h4>
        <button className="border-primary border-[2px] flex items-center gap-y-3 px-2 rounded-md">
          <AiOutlinePlusCircle color={colors.primary} size={24} />
          <span className="text-white text-2xl font-bold">New</span>
        </button>
      </div>
      <div className="flex-1 flex flex-col overflow-auto gap-y-2">
        {walletsMock.map((wallet) => (
          <WalletContainer {...wallet} />
        ))}
        <div className="min-h-[90px]"></div>
      </div>
      <div className="flex justify-end py-2">
        <TfiReload color="white" size={16} />
      </div>
      <div className="h-[72px]"></div>
    </div>
  )
}

export default Wallet
