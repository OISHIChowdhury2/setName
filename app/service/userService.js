const W3 = require('web3');
const path = require('path');
const configApi =require ('../config/configApi');
const Tx = require('ethereumjs-tx');
const fs = require('fs');

var ethPath = path.join(__dirname, "/config/ethConfig.json");
var ethConfig = JSON.parse(fs.readFileSync(ethPath));
const Address = configApi.address;

const web3 = new W3(new W3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

web3.eth.defaultAccount = ethConfig.defaultAccount;
const defaultPrivateKey = ethConfig.defaultAccountPrivateKey;
const contractAddress = configApi.address; 

const UserContract = new web3.eth.Contract(configApi.abi, Address, {
    from: web3.eth.defaultAccount, // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

async function setUser(accountAddress, accountPrivateKey, name) {
    return new Promise(async function (resolve, reject) {
        console.log(accountPrivateKey.substring(2).length);
        // let privateKey = Buffer.from(accountPrivateKey.substring(2), 'hex');
        // let nonce = await web3.eth.getTransactionCount(accountAddress);
        // let latestBlock = await web3.eth.getBlock("latest");
        // let latestBlockGasLimit = latestBlock.gasLimit;
        console.log(latestBlockGasLimit);
        var rawTransaction = {
            from: "0x2361c8414b177F08dB946E886aF7cc23eaA0fe54",
            gasPrice: "20000000000",
            gas: "21000",
            to: '0x36fE2B284f52c976e572C1b2935eDf50E5e6F301',
            value: "1000000000000000000",
            data: ""
        }.then(console.log);
        var transaction = new Tx(rawTransaction);
        transaction.sign(privateKey);
        web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'), (err, txHash) => {
            if (err) reject(err);
            else {
                resolve(txHash);
            }
        });
    });
}
async function getUser(name) {
    let userDetails = await UserContract.methods.getUser().call({ from: name });
    let userInfo = {};
    if (userDetails) {
        // userInfo["nid"] = ethParse(userDetails[i]["nid"]);
        userInfo["name"] = ethParse(userDetails["name"]);
        userInfo["unixTime"] = new Date(parseInt(userDetails["time"].toString()) * 1000);
    }
    return userInfo;
}
module.exports = {
    setUser: setUser,
    getUser: getUser,

}
