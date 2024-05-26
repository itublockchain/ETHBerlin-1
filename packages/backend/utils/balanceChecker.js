const { EthHdWallet } = require("eth-hd-wallet");
const { Web3, eth } = require("web3");

const provider = new Web3.providers.HttpProvider(
  "https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83"
);
const web3 = new Web3(provider);

async function balanceChecker_nonce(mnemonic, nonce) {
  const wallet = await EthHdWallet.fromMnemonic(mnemonic);
  let map = new Map();
  const addresses = wallet.generateAddresses(nonce);
  for (let i = 0; i < addresses.length; i++) {
    const wei = await web3.eth.getBalance(addresses[i]);
    const number = Number(web3.utils.fromWei(wei, "ether"));
    map.set(i, number);
  }

  return output;
}

async function balanceChecker_address(mnemonic, nonce) {
  const wallet = await EthHdWallet.fromMnemonic(mnemonic);
  console.log(wallet.getAddresses());
  console.log(wallet.getAddressCount());
  let map = new Map();

  const addresses = wallet.generateAddresses(nonce);
  for (let i = 0; i < addresses.length; i++) {
    const wei = await web3.eth.getBalance(addresses[i]);
    const number = Number(web3.utils.fromWei(wei, "ether"));
    map.set(addresses[i], number);
  }
  return map;
}

module.exports = { balanceChecker_nonce, balanceChecker_address };
