export {}

declare global {
  interface Window {
    ethereum?: import("ethers").Eip1193Provider &
      import("ethers").BrowserProvider
  }
}
