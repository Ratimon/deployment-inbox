const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//import constructor function so it is capital letter

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
// Const INITIAL_STRING = 'Hi there!'
// For testing, a good way to make the test arguments inmmutable

beforeEach(async () => {
  // The word “async” before a function means one simple thing: a function always returns a promise.
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // The keyword await makes JavaScript wait until that promise settles and returns its result.

  // Use one of those accounts to deploy that can then be deployed
  // the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  // reresents what exists in blockchain
    .deploy({
      data: bytecode,
      arguments: ['Hi there!']
    })// does not actually deploy, it simply create a object
    .send({ from: accounts[0], gas: '1000000' });

  inbox.setProvider(provider)  
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);

    // console.log(inbox);
    // Initially we want to see it works
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    //message() custommize the list of arguements, call() how such a fumction get called
    assert.equal(message, 'Hi there!');
  });

//   it('can change the message', async () => {
//     await inbox.methods.setMessage('bye').send({ from: accounts[0] });
//     const message = await inbox.methods.message().call();
//     assert.equal(message, 'bye');
//   });
});


//////////////////////
// beforeEach(()=> {
//     // Get a list of all accounts
//     web3.eth.getAccounts().then(fetchedAccounts => {
//         console.log(fetchedAccounts);
//     });

//     //use one of those accounts to deploy
//     //the contract
// });

// describe('Inbox',()=> {
//     it('deploys a contract',()=> {

//     });
// });


//////////////////////
// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom'
//     }
// }

// //const car
// // car is not constant, we are going reassign the value
// let car;

// beforeEach(()=>{
//     // const car = new Car();
//     // since scope of car is not avaiable for descibe
//     car = new Car();
// });

// describe('Car', () => {
//     it('can park', ()=> {
//         // const car = new Car();
//         assert.equal(car.park(), 'stopped')
//     });

//     it('can drive', ()=> {
//         // const car = new Car();
//         assert.equal(car.drive(), 'vroom')
//     });   
// });