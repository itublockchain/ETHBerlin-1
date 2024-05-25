const axios = require ('axios');

(async function () {
    let req = (await axios.post('http://localhost:3000/create-main-wallet', {})).data.message;
    const mnemonic = req.mnemonic;
    const wallet = req.wallet;
    console.log(wallet);
})();



/*const { generateMnemonic, EthHdWallet } = require('eth-hd-wallet');
const wallet = EthHdWallet.fromMnemonic("devote owner expand north velvet wine fury spin work shine scene core");
console.log(wallet._root._hdkey._privateKey.toString("hex"));*/