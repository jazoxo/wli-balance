const Web3 = require('web3')
const web3 = new Web3('https://mask.wanli.uno/rpc')

web3.eth.getBalance('0x49cCCd6f61cC57843F653E5994c74FcB71e8e814', (err, wei) => { balance = web3.utils.fromWei(wei, 'ether'); console.log("I have " + balance + "WLI on Wanliuno Network") })