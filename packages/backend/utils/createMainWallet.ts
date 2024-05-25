import { generateMnemonic, EthHdWallet } from "eth-hd-wallet";

interface Wallet {
    mnemonic: string;
    wallet: EthHdWallet;
}

export async function createMainWallet(): Promise<Wallet> {
  const mnemonic = generateMnemonic();
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  return { mnemonic: mnemonic, wallet: wallet };
}