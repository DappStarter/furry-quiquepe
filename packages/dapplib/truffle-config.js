require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strike rival place concert grace lobster equal general'; 
let testAccounts = [
"0x67a19629d4b38409276cb1430d1f2c026b09f9c4c503efd519879ec37dae7d7f",
"0x5f313ee855e4e61ac7ab52f8eee92c569b554b2f868f6dddcdf6460c9b4b6c2d",
"0x3be41bfbe50f64a95041d835ec541d0b3e776173138a3b26b2212ce68cfbb100",
"0x4f132bc38201e755617c8a41e5230b5c7f7406348b573b29969e359f2a9e77bd",
"0x7ae7b71b7beb3c911448727acef75c79619c7319b5ff6382fe0f4bf7ea4188d6",
"0xf65ca36609fabb8247d201448867a098f04051457d5cec3a7ae15dc92724298c",
"0x4c5c90666016a40393dbf340053c4d610234be1e7d5fdeb48c7c34279955e8d1",
"0x1f3da3e1846e8faa72bcd4826223800f87da099d4fd5b6429acf295539b48324",
"0x44d534ba1d699d3e948a393f4046b0d0a41c4bda88375e2243caa6cc3c268fe3",
"0x93c68daaeb8d366430f1df0008da2f604d53bf1b1099d13379c58138132f3d5f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

