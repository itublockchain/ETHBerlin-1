import { generateMnemonic, EthHdWallet } from "eth-hd-wallet";

interface Wallet {
    mnemonic: string;
    wallet: EthHdWallet;
}

export function createMainWallet(): Wallet {
  const mnemonic = generateMnemonic();
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  return { mnemonic: mnemonic, wallet: wallet };
}