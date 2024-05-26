import { useState } from "react"
import { create } from "zustand"

const initialRoute = "/"

interface HookType {
  path: string
  navigate: (path: string) => void
}

const useRouter = create<HookType>()((set) => ({
  path: initialRoute,
  navigate: (path) => set({ path })
}))

export default useRouter
