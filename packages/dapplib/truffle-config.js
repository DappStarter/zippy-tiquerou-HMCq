require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture struggle cruise shift protect include knife equal gate'; 
let testAccounts = [
"0x4daa4e9c4f783e515aae17ae8da3847f9b2cd713cc1c63e95bdcfc763433fb49",
"0x16be308f383caf1ca3faf38a1a3ee0ba6073f1845d349b6ce6c10c987d687b27",
"0x4c2ef2efc6ce7f9d192bf7214397e4860641174e392bf7429ee6aa7309e01e69",
"0x0a5ae3fe489d6ff384c72014b17caa3d64b1591aa5d6285967276b49c4c82bc6",
"0xca93c0f9707be3409a88a8f02ead88ae133e1adcb866b39ce822e5ef520abb54",
"0xec80a9f4bf84bcb5510ceb5f7924e0137ee3609d64febce569afb0395f7d1de0",
"0x60076153a09dd240a9bddfa30ee063efdbcd00cb5603cf2dbd403367038d48b2",
"0x6a5d8ce1b000b84787b9cbbb9f04623afecfe7fee4bccadaf09604593f2a4248",
"0x20fd4f72fbb0bd13ebcf29440cbc29ea8d308ac85a2f35c38d5c77662f8a8758",
"0xa4abdab140138392e2ad801300c6f2e712a199c50755cdc88b0f5775c29dbcf0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


