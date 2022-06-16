const ADVERTISING_ADDRESS = ''

const ADVERTISING_ABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [[Object], [Object], [Object], [Object]],
    name: 'AddAdv',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [[Object], [Object]],
    name: 'IsCall',
    type: 'event',
  },
  {
    inputs: [[Object], [Object], [Object], [Object]],
    name: 'addAdv',
    outputs: [[Object]],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [[Object]],
    name: 'callReward',
    outputs: [[Object]],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllAdv',
    outputs: [[Object]],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllperson',
    outputs: [[Object]],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMyAdv',
    outputs: [[Object]],
    stateMutability: 'view',
    type: 'function',
  },
]

module.exports = {
  ADVERTISING_ABI,
  ADVERTISING_ADDRESS,
}
