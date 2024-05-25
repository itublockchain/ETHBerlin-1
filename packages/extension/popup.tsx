import { useState } from "react"

import "./style.css"

import { useEffect } from "react"

import Background from "~components/background"
import BottomBar from "~components/bottom-bar"
import Topbar from "~components/topbar"
import useRouter from "~hooks/useRouter"
import Home from "~routes/home"
import Router, { RouterPage } from "~routes/router"
import Send from "~routes/send"
import Wallet from "~routes/wallet"

function IndexPopup() {
  const { path } = useRouter()

  return (
    <div className="w-full h-screen flex flex-col">
      <Background />
      <div className="flex-1">
        <Topbar />
        <Router>
          <RouterPage element={<Home />} path="/" />
          <RouterPage element={<Wallet />} path="/wallet" />
          <RouterPage element={<Send />} path="/send" />
        </Router>
      </div>
      {["/", "/wallet"].includes(path) && <BottomBar />}
    </div>
  )
}

export default IndexPopup
