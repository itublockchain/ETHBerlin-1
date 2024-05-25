import React from "react"

import Input from "~components/input"

const SettingsPage = () => {
  return (
    <div className="px-6">
      <h2 className="text-center text-white font-bold text-3xl py-6 ">
        Settings
      </h2>
      <Input placeholder="ip address" className="w-full" />
    </div>
  )
}

export default SettingsPage
