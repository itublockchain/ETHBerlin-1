const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");
const { ethers } = require("ethers");

const { bestWalletCombination } = require("./bestWalletCombination");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83"
);

async function signTransaction(mnemonic, to, amount, nonce) {
  console.log(mnemonic, to, amount, nonce);
  const senders = await bestWalletCombination(mnemonic, amount, nonce);
  let wallet = EthHdWallet.fromMnemonic(mnemonic);
  let rawTxs = [];

  for (let i = 0; i < senders.size - 1; i++) {
    let balance = senders.get(i);
    wallet.discardAddresses(nonce);
    const rawTx = await wallet.signTransaction({
      from: wallet.generateAddresses(nonce)[i],
      to: to,
      value: balance * Math.exp(18),
      nonce: i,
      chainId: 1,
    });

    amount -= balance;
    rawTxs.push(rawTx);
  }
  wallet.discardAddresses(nonce);
  rawTxs.push(
    await wallet.signTransaction({
      from: wallet.generateAddresses(nonce)[senders.size - 1],
      to: to,
      value: amount * Math.exp(18),
      nonce: senders.size - 1,
      chainId: 1,
    })
  );

  wallet = new ethers.Wallet.fromMnemonic(mnemonic);
  wallet.connect(provider);
  return rawTxs.map(async (rawTx) => await wallet.sendTransaction(rawTx));
}

module.exports = { signTransaction };
