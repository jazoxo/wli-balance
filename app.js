const Web3 = require('web3')
require('dotenv').config()
const web3 = new Web3('https://mask.wanli.uno/rpc')

web3.eth.getBalance(process.env["USER_ADDRESS"], (err, wei) => { balance = web3.utils.fromWei(wei, 'ether'); console.log("I have " + balance + " WLI on Wanliuno Network") })