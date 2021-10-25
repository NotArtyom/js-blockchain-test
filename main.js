const { Blockchain } = require('./src/blockchain.js')
const { Transaction } = require('./src/transaction.js')

const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('b6cedeebd4c176c390017e3bdf15995832ef480f50e9e77d10c7432b07defd19')
const myWalletAddress = myKey.getPublic('hex')

let dugiCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
dugiCoin.addTransaction(tx1)

console.log('\n Starting the miner...')
dugiCoin.minePendingTransactions(myWalletAddress)

console.log('Balance of Me is ', dugiCoin.getBalanceOfAddress(myWalletAddress))

console.log('Is chain valid?', dugiCoin.isChainValid())
