const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");
const { ethers } = require("ethers");

const { bestWalletCombination } = require("./bestWalletCombination");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83"
);

async function signTransaction(mnemonic, to, amount, nonce) {
  const senders = await bestWalletCombination(mnemonic, amount, nonce);
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  let rawTxs = [];

  for (let i = 0; i < senders.size - 1; i++) {
    let balance = senders.get(i);
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

  rawTxs.push(
    await wallet.signTransaction({
      from: wallet.generateAddresses(nonce)[senders.size - 1],
      to: to,
      value: ethers.utils.parseEther(amount),
      nonce: n,
      chainId: 1,
    })
  );

  wallet = new ethers.Wallet.fromMnemonic(mnemonic);
  return rawTxs.map(async (rawTx) => await provider.sendTransaction(rawTx));
}

module.exports = { signTransaction };
