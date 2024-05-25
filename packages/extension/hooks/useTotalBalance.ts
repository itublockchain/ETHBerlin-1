import { useMemo } from "react"

import { useUser } from "./useUser"

const useTotalBalance = () => {
  const { user } = useUser()

  const totalBalance = useMemo(() => {
    return user?.balances?.map((b) => +b[1]).reduce((a, b) => a + b, 0)
  }, [user])

  return [totalBalance]
}

export default useTotalBalance
