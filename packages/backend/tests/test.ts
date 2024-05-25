const { generateMnemonic, EthHdWallet } = require("eth-hd-wallet");

const mnemonic = generateMnemonic();
console.log(mnemonic);
const randomWallet = EthHdWallet.fromMnemonic(mnemonic);
console.log(randomWallet.generateAddresses(5));

const testMnemonic =
  "ugly pelican fatal snake aerobic fabric spoon iron wide upgrade tornado during";

const wallet = EthHdWallet.fromMnemonic(testMnemonic);
console.log(wallet.generateAddresses(5));

const test = "";
