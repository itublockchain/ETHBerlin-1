import { EthHdWallet } from "eth-hd-wallet";
import { Web3 } from "web3";

const provider = new Web3.providers.HttpProvider("https://eth-sepolia.g.alchemy.com/v2/nuYcAxyDrRvXmeQ5fcFUpxEXup-mUF83");
const web3 = new Web3(provider);

type AddressBalanceMap = Map<number, number>;

export async function bestWalletCombination (mnemonic: string, amount: number) : Promise<AddressBalanceMap> {
    const wallet = EthHdWallet.fromMnemonic(mnemonic);
    let map = new Map();
    const addresses = wallet.getAddresses();
    for (let i = 0; i < addresses.length; i++) {
        map.set(i, await web3.eth.getBalance(addresses[i]));
    }

    // let map = new Map(wallet.getAddresses().map(async (address: string) => [address, await web3.eth.getBalance(address)]));

    for (let i = 0; i < map.size; i++) {
        for (let j = 0; j < (map.size - i - 1); j++) {
            if (map[j][1] < map[j + 1][1]) {
                let temp = map[j];
                map[j] = map[j + 1];
                map[j + 1] = temp;
            }
        }
    } // Obtain descending sorted map with Bubble Sort Algorithm

    let output = new Map();
    for (const [nonce , balance] of map as Map<number, number>) {
        output.set(nonce, balance);
        amount -= balance;
        if (amount <= 0) {break;}
    }

    return output;
}