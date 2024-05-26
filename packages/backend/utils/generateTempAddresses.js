const { EthHdWallet } = require("eth-hd-wallet");

async function generateTempAddresses(nonce, mnemonic) {
  const wallet = await EthHdWallet.fromMnemonic(mnemonic);
  wallet.discardAddresses(nonce);
  return wallet.generateAddresses(nonce);
}

module.exports = { generateTempAddresses };
