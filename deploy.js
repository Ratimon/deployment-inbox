const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');

const provider = new HDWalletProvider(
    'south tortoise rice toward visual reason build easy empower gauge spy credit',
    'https://rinkeby.infura.io/33bbE6DHn0EGshe1k1gJ'
);
const web3 = new Web3(provider);