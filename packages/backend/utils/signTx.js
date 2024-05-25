const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");

const { bestWalletCombination } = require("./bestWalletCombination");

async function signTransaction(mnemonic, to, amount) {
  let output = await bestWalletCombination(mnemonic, amount);
  let rawTx = [];

  const wallet = EthHdWallet.fromMnemonic(mnemonic);

  for (let [nonce, balance] of output) {
    let raw = wallet.signTransaction({
      from: wallet.getAddresses()[nonce],
      to: to,
      value: balance,
      nonce: nonce,
      gasPrice: 50000000000,
      gasLimit: 21000,
      chainId: 1,
    });

    rawTx.push(raw);
  }

  Web3.eth.sendRawTransaction(rawTx);
}

module.exports = { signTransaction };