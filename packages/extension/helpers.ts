export const walletShorten = (wallet_address: string) => {
  return (
    wallet_address.slice(0, 5) +
    ".." +
    wallet_address.slice(wallet_address.length - 5, wallet_address.length)
  )
}
