const { EthHdWallet } = require("eth-hd-wallet");

async function generateTempAddresses(nonce, mnemonic) {
  const wallet =  EthHdWallet.fromMnemonic(mnemonic);
  return  wallet.generateAddresses(nonce);
}

module.exports = { generateTempAddresses };
