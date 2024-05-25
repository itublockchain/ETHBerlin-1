import React from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { walletShorten } from "~helpers"
import { useUser } from "~hooks/useUser"
import ClipboardSVG from "~svg/clipboard"
import EthereumSVG from "~svg/ethereum"

import Dropdown, { type ItemType } from "./dropdown"

const Topbar = () => {
  const [wallet_seed] = useStorage("wallet_seed")

  const techItems: ItemType = [
    { label: "ETH", Icon: EthereumSVG, hideLabel: true, value: "eth" }
  ]

  const accountItems: ItemType = [
    {
      label: "John Doe",
      value: "john-doe"
    }
  ]

  const { user } = useUser()

  const walletAddress = user.wallet_address ?? "0xc12e122134214214124"

  const copyToClipboard = () => {
    if (!navigator.clipboard) {
      return
    }
    navigator.clipboard.writeText(walletAddress)
  }

  return (
    <header className="bg-[#393E46] bg-opacity-50 backdrop-blur-sm shadow-md w-full py-4">
      <div className="flex justify-between px-2 items-start">
        <div className="h-[30px] flex items-center">
          <h3 className="text-white">Logo</h3>
        </div>
        <div className="w-[120px] flex flex-col">
          <Dropdown disabled items={accountItems} />
          <div className="flex justify-start items-center gap-x-2 py-1">
            <div className=" text-white font-bold ">
              {walletShorten(walletAddress)}
            </div>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-secondary rounded-md overflow-hidden">
              <ClipboardSVG />
            </button>
          </div>
        </div>
        <Dropdown disabled items={techItems} />
      </div>
    </header>
  )
}

export default Topbar
