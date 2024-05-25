import { create } from "zustand"

import type { User, UserPartial } from "~types/user"

interface HookType {
  user: UserPartial
  setUserProp: (prop: keyof User, value: User[typeof prop]) => void
}

export const useUser = create<HookType>()((set, get) => ({
  user: {},
  setUserProp: (prop, value) => set({ user: { ...get().user, [prop]: value } })
}))
