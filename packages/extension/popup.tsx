import { useState } from "react"

import "./style.css"

import { useEffect } from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import Background from "~components/background"
import BottomBar from "~components/bottom-bar"
import Topbar from "~components/topbar"
import useRouter from "~hooks/useRouter"
import { useUser } from "~hooks/useUser"
import Home from "~routes/home"
import Router, { RouterPage } from "~routes/router"
import Send from "~routes/send"
import SettingsPage from "~routes/settings"
import Wallet from "~routes/wallet"
import type { User } from "~types/user"

const storage = new Storage()

function IndexPopup() {
  const { path } = useRouter()

  const { setUserProp } = useUser()

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

  useEffect(() => {
    getBalances()
  }, [])

  const createWallet = async () => {
    const res = await sendToBackground({
      name: "createWallet",
      body: {
        nonce: Math.max(+(await storage.get("nonce")), 1),
        wallet_address: (await storage.get("wallet_address")) ?? null,
        wallet_seed: (await storage.get("wallet_seed")) ?? null,
        ip
      }
    })

    await storage.set("wallet_seed", res?.message.mnemonic)
    await storage.set("nonce", res?.message.nonce)
  }

  const getTempWallets = async () => {
    const res = await sendToBackground({
      name: "generateTempAddress",
      body: {
        nonce: Math.max(+(await storage.get("nonce")), 1),
        wallet_seed: await storage.get("wallet_seed"),
        ip
      }
    })
  }

  useEffect(() => {
    createWallet()
  }, [])

  return (
    <div className="w-full h-screen flex flex-col">
      <Background />
      <div className="flex-1 overflow-hidden pb-[60px]">
        <Topbar />
        <Router>
          <RouterPage element={<Home />} path="/" />
          <RouterPage element={<Wallet />} path="/wallet" />
          <RouterPage element={<SettingsPage />} path="/settings" />
          <RouterPage element={<Send />} path="/send" />
        </Router>
      </div>
      {["/", "/wallet", "/settings"].includes(path) && <BottomBar />}
    </div>
  )
}

export default IndexPopup
