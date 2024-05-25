import React from "react"

import EthereumSVG from "~svg/ethereum"

interface Props {
  label: string
  amount: number
  amountCurrency: string
  image: string
}

const HomeToken: React.FC<Props> = ({
  amount,
  amountCurrency,
  label,
  image
}) => {
  return (
    <div className="flex items-center py-2 px-2 bg-quaternary bg-opacity-20 rounded-md gap-x-3">
      <div className="bg-primary rounded-full p-2">
        <img className="w-[48px] aspect-square rounded-full" src={image} />
      </div>
      <div className="flex flex-col flex-1 text-white">
        <span>{label}</span>
        <span>{amount}</span>
      </div>
      <div className="text-white font-bold text-lg">{amountCurrency}</div>
    </div>
  )
}

export default HomeToken
