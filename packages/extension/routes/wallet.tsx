import React, { useEffect, useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TfiReload } from "react-icons/tfi"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import WalletContainer from "~components/walletContainer"
import { colors } from "~constants"
import { useUser } from "~hooks/useUser"
import walletsMock from "~mock/wallets"
import type { User } from "~types/user"

const storage = new Storage()

const Wallet = () => {
  const { setUserProp, user } = useUser()

  const [ip] = useStorage("ip")

  const getBalances = async () => {
    const res = await sendToBackground({
      name: "getBalances",
      body: {
        nonce: Math.max(+(await storage.get("nonce")), 1),
        wallet_seed: await storage.get("wallet_seed"),
        ip
      }
    })
    setUserProp("balances", Object.values(res.message) as User["balances"])
  }

  const createNewTempAddress = async () => {
    const res = await sendToBackground({
      name: "generateTempAddress",
      body: {
        wallet_seed: await storage.get("wallet_seed"),
        nonce: await storage.get("nonce"),
        type: "increase",
        ip
      }
    })

    await storage.set("nonce", res.nonce)
  }

  useEffect(() => {
    getBalances()
  }, [])

  return (
    <div className="h-full overflow-hidden  px-4 flex flex-col ">
      <WalletContainer
        amountCurrency={user?.balances?.[0]?.[1]}
        image=""
        label="AnaCüzdan"
        wallet_address={user?.balances?.[0]?.[0] ?? ""}
      />
      <div className="flex items-center justify-between my-2">
        <h4 className="text-white font-bold  text-xl mt-3">
          Temp wallets - {user.balances?.length - 1}
        </h4>
        <button
          onClick={() => {
            createNewTempAddress().then(() => {
              getBalances()
            })
          }}
          className="border-primary border-[2px] flex items-center gap-y-3 px-2 rounded-md">
          <AiOutlinePlusCircle color={colors.primary} size={24} />
          <span className="text-white text-2xl font-bold">New</span>
        </button>
      </div>
      <div className="flex-1 flex flex-col overflow-auto gap-y-2">
        {user?.balances
          ?.slice(1)
          .map((wallet) => (
            <WalletContainer
              image="https://imgur.com/a/9TqsLcW"
              amountCurrency={wallet[1]}
              wallet_address={wallet[0]}
              label=""
            />
          ))}
        <div className="min-h-[90px]"></div>
      </div>
      <div className="flex justify-end py-2">
        <TfiReload
          onClick={() => {
            getBalances()
          }}
          color="white"
          size={16}
        />
      </div>
      <div className="h-[72px]"></div>
    </div>
  )
}

export default Wallet
