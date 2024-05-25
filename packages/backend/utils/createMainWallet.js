import { generateMnemonic, EthHdWallet } from "eth-hd-wallet";

export default async function createMainWallet () {
  const mnemonic = generateMnemonic();
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  return {mnemonic: mnemonic, wallet: wallet};
}