const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");

const { bestWalletCombination } = require("./bestWalletCombination");

async function signTransaction(mnemonic, to, amount, nonce) {
  let output = await bestWalletCombination(mnemonic, amount, nonce);
  let rawTx = [];

  const wallet = EthHdWallet.fromMnemonic(mnemonic);

  for (let [n, balance] of output) {
    let raw = wallet.signTransaction({
      from: wallet.generateAddresses(nonce)[n],
      to: to,
      value: balance,
      nonce: n,
      gasPrice: 50000000000,
      gasLimit: 21000,
      chainId: 1,
    });

    rawTx.push(raw);
  }

  Web3.eth.sendRawTransaction(rawTx);
}

module.exports = { signTransaction };
