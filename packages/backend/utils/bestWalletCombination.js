const { EthHdWallet } = require("eth-hd-wallet");
const { Web3 } = require("web3");

const provider = new Web3.providers.HttpProvider(
  "https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83"
);
const web3 = new Web3(provider);

async function bestWalletCombination(mnemonic, amount, nonce) {
  const wallet = EthHdWallet.fromMnemonic(mnemonic);
  let map = new Map();
  const addresses = wallet.generateAddresses(nonce);
  for (let i = 0; i < addresses.length; i++) {
    const wei = await web3.eth.getBalance(addresses[i]);
    const number = Number(web3.utils.fromWei(wei, "ether"));
    map.set(i, number);
  }

  // let map = new Map(wallet.getAddresses().map(async (address: string) => [address, await web3.eth.getBalance(address)]));

  map = Array.from(map);
  for (let i = 0; i < map.size; i++) {
    for (let j = 0; j < map.size - i - 1; j++) {
      if (map[j][1] < map[j + 1][1]) {
        let temp = map[j];
        map[j] = map[j + 1];
        map[j + 1] = temp;
      }
    }
  } // Obtain descending sorted map with Bubble Sort Algorithm

  let output = new Map();
  for (const [nonce, balance] of map) {
    output.set(nonce, balance);
    amount -= balance;
    if (amount <= 0) {
      break;
    }
  }

  return output;
}

module.exports = { bestWalletCombination };
