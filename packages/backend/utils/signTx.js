const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");

const { bestWalletCombination } = require("./bestWalletCombination");

const provider = new Web3.providers.HttpProvider(
  "https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83"
);
const web3 = new Web3(provider);

async function signTransaction(mnemonic, to, amount, nonce) {
  let output = await bestWalletCombination(mnemonic, amount, nonce);
  let rawTx = [];

  const wallet = EthHdWallet.fromMnemonic(mnemonic);

  for (let [n, balance] of output) {
    let raw = wallet.signTransaction({
      from: wallet.getAddresses()[n],
      to: to,
      value: balance,
      nonce: n,
      gasPrice: 50000000000,
      gasLimit: 21000,
      chainId: 1,
    });

    rawTx.push(raw);
  }

  web3.eth.sendRawTransaction(rawTx);
}

module.exports = { signTransaction };
