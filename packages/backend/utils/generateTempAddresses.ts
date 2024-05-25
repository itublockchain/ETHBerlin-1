import {generateMnemonic,EthHdWallet} from "eth-hd-wallet"

export async function generateTempAddresses(nonce:Number, mnemonic: String) {
    const wallet = EthHdWallet.fromMnemonic(mnemonic)
    return wallet.generateAddresses(nonce)
}