const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider(
  "https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83"
);
const web3 = new Web3(provider);

async function balanceChecker (mnemonic, nonce) {
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  let map = new Map();
  const addresses = wallet.generateAddresses(nonce);
  for (let i = 0; i < addresses.length; i++) {
      map.set(i, await web3.eth.getBalance(addresses[i]));
  }

  return output;
}

module.exports = { balanceChecker };
