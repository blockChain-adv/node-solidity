const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const Web3 = require('web3')
const mongoose = require('mongoose') // 사용하지 않는다. 일단 import -> 이후 확장가능
const contract = require('@truffle/contract')
const solc = require('solc')
const fs = require('fs')
const { ADVERTISING_ABI, ADVERTISING_ADDRESS } = require('./config')
require('dotenv').config()
const artifacts = require('./build/contracts/Advertising.json')

var advertisement = fs.readFileSync('./contracts/Advertising.sol').toString()

app.use(cors())
app.use(express.json())

// Input structure for solidity compiler
var input = {
  language: 'Solidity',
  sources: {
    'Advertising.sol': {
      content: advertisement,
    },
  },

  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
}

var output = JSON.parse(solc.compile(JSON.stringify(input)))

ABI = output.contracts['Advertising.sol']['Advertising'].abi
console.log(ABI)
bytecode =
  output.contracts['Advertising.sol']['Advertising'].evm.bytecode.object

if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider)
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
  console.log('Web3 is connected')
}

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port ' + (process.env.PORT || 3001))
})

// contract = new web3.eth.Contract(ABI)
eth_contract = new web3.eth.Contract(ABI)
/*
web3.eth.getAccounts().then(accounts => {
  // Display all Ganache Accounts
  console.log('Accounts:', accounts)

  mainAccount = accounts[0]

  // address that will deploy smart contract
  console.log('Default Account:', mainAccount)
  eth_contract
    .deploy({ data: bytecode })
    .send({ from: mainAccount, gas: 470000 })
    .on('receipt', receipt => {
      // Contract Address will be returned here
      console.log('Contract Address:', receipt.contractAddress)
    })
    .then(initialContract => {
      initialContract.methods.message().call((err, data) => {
        console.log('Initial Data:', data)
      })
    })
})
*/
