const { generateMnemonic, EthHdWallet } = require("eth-hd-wallet");

async function createMainWallet() {
  const mnemonic = generateMnemonic();
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  return { mnemonic: mnemonic, wallet: wallet };
}

module.exports = { createMainWallet };
