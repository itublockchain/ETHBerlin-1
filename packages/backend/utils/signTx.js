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
  wallet.discardAddresses(nonce);
  const addresses = senders;
  wallet = ethers.Wallet.fromMnemonic(mnemonic);

  let transaction, transactionWithoutFrom;

  for (let i = 0; i < senders.size - 1; i++) {
    console.log("current address", addresses[senders.size - 1]);
    let balance = senders.get(i);
    transaction = {
      from: addresses[i],
      to: to,
      value: ethers.utils.parseEther(`${balance}`),
      nonce: i,
      gasPrice: 50000000000,
      gasLimit: 21000,
      chainId: 11155111,
    };
    transactionWithoutFrom = {
      to: to,
      value: ethers.utils.parseEther(`${balance}`),
      nonce: i,
      gasPrice: 50000000000,
      gasLimit: 21000,
      chainId: 11155111,
    };

    const rawTx = await wallet
      .signTransaction(transaction)
      .then(ethers.utils.serializeTransaction(transactionWithoutFrom));
    console.log("serialized");
    amount -= balance;
    rawTxs.push(rawTx);
  }

  transaction = {
    from: addresses[senders.size - 1],
    to: to,
    value: ethers.utils.parseEther(`${amount}`),
    nonce: senders.size - 1,
    gasPrice: 50000000000,
    gasLimit: 21000,
    chainId: 11155111,
  };
  transactionWithoutFrom = {
    to: to,
    value: ethers.utils.parseEther(`${amount}`),
    nonce: senders.size - 1,
    gasPrice: 50000000000,
    gasLimit: 21000,
    chainId: 11155111,
  };
  const rtx = await wallet
    .signTransaction(transaction)
    .then(ethers.utils.serializeTransaction(transactionWithoutFrom));

  rawTxs.push(rtx);

  wallet = wallet.connect(provider);

  console.log("pass");
  return rawTxs.map(async (rawTx) => {
    console.log(rawTx);
    await wallet.sendTransaction(rawTx);
  });
}

module.exports = { signTransaction };
