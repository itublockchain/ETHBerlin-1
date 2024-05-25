const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const { generateMnemonic, EthHdWallet } = require ("eth-hd-wallet");
const { Web3 } = require ("web3");


app.use(cors());
app.use(bodyParser.json());


app.post('/create-main-wallet', (req, res) => {
    const mnemonic = generateMnemonic();
    const wallet = EthHdWallet.fromMnemonic(mnemonic);
    console.log(wallet)
    res.json({ message: {mnemonic: mnemonic, wallet: wallet} });
}); // return mnemonic, and wallet. We need to store wallet object in local storage

app.post(`/create-temp-wallet/:n`, (req, res) => {
    const n = req.params.n;
    const wallet = req.body.wallet;
    wallet.generateAddresses(n);
    res.json({message: {addresses: wallet.getAddresses()}}); // returns array of public address
});

app.post(`/send-eth`, (req, res) => {
    const provider = new Web3.providers.HttpProvider("https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83");
    const web3 = new Web3(provider);

    let {addresses, amount, receiver} = req.body;
    const balances = [];

    for (let address of addresses) {
        web3.eth.getBalance(address).then(res=> {balances.push(res);});
    }

    for (let i = 0; i < balances.length; i++) {
        for (let j = 0; j < (balances.length - i - 1); j++) {
            if (balances[j] > balances[j + 1]) {

                let temp1 = balances[j];
                balances[j] = balances[j + 1];
                balances[j + 1] = temp1;

                let temp2 = addresses[j];
                addresses[j] = addresses[j + 1];
                addresses[j + 1] = temp2;
            }
        }
    }

    let choosenAccounts = [];
    let total = 0;
    for (let i = balances.length; i > 0; i--) {
        choosenAccounts.push(addresses[i]);
        total += balances[i];
        if (total > amount) {break;}
    }

    for (let i = balances.length - 2; i >= addresses.length - choosenAccounts.length; i--) {
        amount -= balances[i];
        web3.eth.signTransaction({from: choosenAccounts[-(i-balances.length)-1], to: receiver, value: web3.utils.toWei(balances[i], 'ether')});
    }

    web3.eth.signTransaction({from: choosenAccounts[choosenAcoounts.length - 1], to: receiver, value: web3.utils.toWei(amount, 'ether')});
});

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu port ${port} üzerinde çalışıyor`);
});