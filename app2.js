const wanliunoTx = require('ethereumjs-tx').Transaction
require('dotenv').config()
const Web3 = require('web3')
const web3 = new Web3('https://mask.wanli.uno/rpc')

const account1 = process.env['USER_ADDRESS'] 
const account2 = process.env['RECEIVER_ADDRESS'] 

const privateKey1 = Buffer.from(process.env['YOUR_PRIVATE_KEY_1'], 'hex')
//const privateKey2 = Buffer.from(process.env['YOUR_PRIVATE_KEY_2'], 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei(process.env['AMOUNT'], 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new wanliunoTx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check https://explorer.wanli.uno/ to see the transaction!
  })
})