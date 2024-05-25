import React from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import Input from "~components/input"

const SettingsPage = () => {
  const [ip, setIp] = useStorage("ip")

  return (
    <div className="px-6">
      <h2 className="text-center text-white font-bold text-3xl py-6 ">
        Settings
      </h2>
      <Input
        value={ip}
        onChange={(e) => {
          setIp(e.target.value)
        }}
        placeholder="localhost"
        className="w-full"
      />
    </div>
  )
}

export default SettingsPage
