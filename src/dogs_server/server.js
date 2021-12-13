const express = require('express')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const app = express()
const port = 55666
var cors = require('cors')
app.use(cors())
app.use(express.json())
const url = 'mongodb://dogs_mongo:27017'
const dbName = 'test'
const ethUtil = require("ethereumjs-util")
const ethers = require("ethers")

const client = new MongoClient(url)

async function main() {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('test')
  // the following code examples can be pasted here...

  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.send('AAAAAAA')
})

app.post('/api/login', async (req, res) => {
  message = "Hello World"
  console.log(req.body)
  signature = req.body.signature
  console.log(signature)
  
  const digest = ethers.utils.arrayify(ethers.utils.hashMessage(message));
  const address = await ethers.utils.recoverAddress(digest, signature);

  //let pubKey = ethers.utils.recoverPublicKey(ethers.utils.arrayify(ethers.utils.hashMessage(ethers.utils.arrayify(hash))), signature);
  //let address = ethers.utils.computeAddress(pubKey)  
  console.log(address)

  /*
  const msg = "QQ";
  const prefix = '\x19Ethereum Signed Message:\n' +
               String.fromCharCode(message.length);
  const stringToSign = prefix + msg;
  const sig = ethUtil.fromRpcSig(signature);
  
  const publicKey = ethUtil.ecrecover(ethUtil.sha3(stringToSign),
      sig.v, sig.r, sig.s);
  
  const recovered2 = ethUtil.bufferToHex(ethUtil.pubToAddress(publicKey));
  */
  // First the message must be binary
  /*
  let hashBytes = arrayify(hash);

  // Then you must compute the prefixed-message hash
  let messgeHash = ethers.util.hashMessage(hashBytes);

  // Then you must make this binary
  let messageHashBytes = ethers.utils.arrayify(messageHash);

  // Now you have the digest,
  let publicKey = ethers.utils.recoverPublicKey(messageHashBytes);
  */
  res.send(address)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})