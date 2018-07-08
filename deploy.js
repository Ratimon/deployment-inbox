const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'south tortoise rice toward visual reason build easy empower gauge spy credit',
    'https://rinkeby.infura.io/33bbE6DHn0EGshe1k1gJ'
);
const web3 = new Web3(provider);

const deploy = async ()=> {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data:'0x'+ bytecode, arguments: ['Hi there!']})
        .send({ gas: '1000000', from: accounts[0] })
    
        console.log('Contract depolyed to', result.options.address);
};
deploy()