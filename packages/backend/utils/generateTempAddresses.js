const { EthHdWallet } = require("eth-hd-wallet");

async function generateTempAddresses(nonce, mnemonic) {
  const wallet = await EthHdWallet.fromMnemonic(mnemonic);
  return wallet.generateAddresses(1);
}

module.exports = { generateTempAddresses };
