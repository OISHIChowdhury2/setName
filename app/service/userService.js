const W3 = require('web3');
const path = require('path');
const configApi =require ('../config/configApi');
const Tx = require('ethereumjs-tx');
const fs = require('fs');

var ethPath = path.join(__dirname, "/config/ethConfig.json");
var ethConfig = JSON.parse(fs.readFileSync(ethPath));
const Address = configApi.address;
const web3 = new W3(new W3.providers.HttpProvider(ethConfig.provider));
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
        let privateKey = Buffer.from(accountPrivateKey.substring(2), 'hex');
        let nonce = await web3.eth.getTransactionCount(accountAddress);
        let latestBlock = await web3.eth.getBlock("latest");
        let latestBlockGasLimit = latestBlock.gasLimit;
        console.log(latestBlockGasLimit);
        var rawTransaction = {
            "from": accountAddress,
            "gasPrice": web3.utils.toHex(20 * 1e9),
            "gasLimit": web3.utils.toHex(latestBlockGasLimit - 10000),
            "to": contractAddress,
            "value": "0x0",
            "data": UserContract.methods.setUser(ethStringify(name)).encodeABI(),
            "nonce": web3.utils.toHex(nonce)
        };
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
async function getUser(accountAddress) {
    let userDetails = await UserContract.methods.getUser().call({ from: accountAddress });
    let userInfo = {};
    if (userDetails) {
        // userInfo["nid"] = ethParse(userDetails[i]["nid"]);
        userInfo["name"] = nidLog[i]["name"];
        userInfo["addres"] = nidLog[i]["addres"];
        userInfo["phone"] = nidLog[i]["phone"];
        userInfo["unixTime"] = new Date(parseInt(userDetails[i]["time"].toString()) * 1000);
    }
    return niduserInfoInfo;
}

// will return array of all the keys
function getKeys() {
}
// will return bool status of the key
async function isKeyExists(address) {
    let status = await UserContract.methods.isKeyExists(address).call();
    return status;
}
module.exports = {
    setUser: setUser,
    getUser: getUser,
    getKeys: getKeys,
    isKeyExists: isKeyExists
}
