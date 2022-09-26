 const W3 = require('web3');
const path = require('path');
const configApi =require ('../config/configApi');


const Address = configApi.Address;

const web3 = new W3(new W3.providers.HttpProvider(configApi.provider));

const userContract = new web3.eth.Contract(configApi.abi, Address, {
    from: web3.eth.defaultAccount, // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
async function setUser(accountAddress, accountPrivateKey, name,namemageHash) {
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
            "data": UserContract.methods.setUser(UserHash).encodeABI(),
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
    let usetDetails = await UserContract.methods.getUser().call({ from: accountAddress });
    let userInfo = {};
    if (userDetails) {
        userInfo["name"] = ethSerializer.ethParse(userDetails["user"]);
        userInfo["addres"] = ethSerializer.ethParse(userDetails["user"]);
        userInfo["phone"] = ethSerializer.ethParse(userDetails["user"]);
        userInfo["unixTime"] = new Date(parseInt(userDetails["user"].toString()) * 1000);
    }

    return userInfo;

}

module.exports = {
    setUser: setUser,
    getUser: getUser,
  
}
