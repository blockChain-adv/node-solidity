const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const Web3 = require('web3')
const mongoose = require('mongoose') // 사용하지 않는다. 일단 import -> 이후 확장가능
const contract = require('@truffle/contract')
const { ADVERTISING_ABI, ADVERTISING_ADDRESS } = require('./config')
require('dotenv').config()
const artifacts = require('./build/contracts/Advertising.json')

app.use(cors())
app.use(express.json())

if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider)
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
  console.log('Web3 is connected')
}

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port ' + (process.env.PORT || 3001))
})

const Advertisement = contract(ADVERTISING_ABI)

console.log(Advertisement)
Advertisement.setProvider(web3)
