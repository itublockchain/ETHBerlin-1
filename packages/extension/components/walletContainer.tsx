import React from "react"

import { walletShorten } from "~helpers"
import ClipboardSVG from "~svg/clipboard"

interface Props {
  wallet_address: string
  amountCurrency: string
  label: string
  image: string
}

const WalletContainer: React.FC<Props> = ({
  amountCurrency,
  wallet_address,
  label,
  image
}) => {
  const copyToClipboard = (text: string) => () => {
    if (!navigator.clipboard) {
      return
    }
    navigator.clipboard.writeText(text)
  }
  return (
    <div className="flex items-center py-2 px-2 bg-quaternary bg-opacity-20 rounded-md gap-x-3">
      <div className="bg-primary rounded-full p-2">
        <img className="w-[48px] aspect-square rounded-full" src={image} />
      </div>
      <div className="flex flex-col flex-1 text-white">
        <span>{label}</span>
        <div className="flex">
          <span>{walletShorten(wallet_address)}</span>
          <button
            onClick={copyToClipboard(wallet_address)}
            className="p-1 hover:bg-secondary rounded-md overflow-hidden">
            <ClipboardSVG />
          </button>
        </div>
      </div>
      <div className="text-white font-bold text-lg">{amountCurrency}</div>
    </div>
  )
}

export default WalletContainer
