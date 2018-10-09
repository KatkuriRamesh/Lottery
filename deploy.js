const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
  'weird salute section tilt prison avocado senior other broken love room viable',
  'https://rinkeby.infura.io/v3/448de3d976a9400d9e6d6a753e8801c5'
);
const web3 = new Web3(provider);

let accounts;
let result;

const deploy = async () => {
  accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account ',accounts[0]);

  result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: '0x' + bytecode})
  .send({from: accounts[0], gas:'1000000'});
  console.log(interface);
  console.log('Contract deployed to ', result.options.address);
};
deploy();
