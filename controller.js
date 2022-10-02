const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;
const config = require("./main");
// const { get } = require("./route");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

web3.eth.defaultAccount = "0x09DA8Db931F977b2e1a6C50ec2B8c52D2AE7fc2a";

async function isEthAlive() {
  let status = await web3.eth.net.isListening();
  return status;
}
(async function () {
 console.log("[INFO] Starting app...");
  console.log(`[INFO] Node status ${await isEthAlive()}`);
});
  
  const SetGetContract = new web3.eth.Contract(config.abi, config.address, {
    from: web3.eth.defaultAccount, 
    gasPrice: "20000000000",
  });
 
 async function setUser(_name){
    return new Promise(async function (resolve,reject){
    // SetGetContract.methods.setUser().send({ from: web3.eth.defaultAccount }); 
    // })
    console.log(_name);
    let user = await SetGetContract.methods.setUser(_name).send({ from: _name })
     return user;
 }
 );
}





  //  let UserName = await SetGetContract.methods.setName().send({ from: web3.eth.defaultAccount})
   
  //  return UserName;
    //  console.log(UserInfotmation);
    //  let UserAddress = await

    //  SetGetContract.methods
    //      .setAddres()
    //      .send({ from: web3.eth.defaultAccount })
    //      .on("transactionHash", (hash) => {
    //        console.log(hash);

    //   let  SetGetUserPhone = await
    //      .setPhone()
    //      .send({ from: web3.eth.defaultAccount })
    //      .on("transactionHash", (hash) => {
    //        console.log(hash);
    //      });


    // })
  

  // async function (req, res) {
    //     try{
    //         let userData = {
    //             name: req.body.name,
    //             addres: req.body.addres,
    //             phone: req.body.phone
    //         }
    //         console.log(userData);
    //         return res.status(200).json({txHash: txHash})
    //     }
    // catch (ex) {
    //     console.log(ex);
    //     return res.status(500).json({message: ex.toString()});
    // }
// });



  // async function setUser(name,addres,phone){
  //   return new Promise(async function ( resolve,reject){
    
  //     SetGetContract.methods.setName(name).send({ from: web3.eth.defaultAccount })
  //   .on("transactionHash", (hash) => {
  //     console.log(hash);

  //   })
//   SetGetContract.methods
//     .setName("mimon")
//     .send({ from: web3.eth.defaultAccount })
//     .on("transactionHash", (hash) => {
//       console.log(hash);
//     });

//     SetGetContract.methods
//     .setAddres("Naraengong")
//     .send({ from: web3.eth.defaultAccount })
//     .on("transactionHash", (hash) => {
//       console.log(hash);
//     });

//     SetGetContract.methods
//     .setPhone("0392808504")
//     .send({ from: web3.eth.defaultAccount })
//     .on("transactionHash", (hash) => {
//       console.log(hash);
//     });
// })
// };

async function getInfo(){
  // let Details = await SetGetContract.methods.getInfo().call({from: web3.eth.defaultAccount}){
  //   if(error) throw error;
  //   res.status(200).json(results.rows);
  let nidDetails = await SetGetContract.methods.getInfo().call({ from: web3.eth.defaultAccount});
  let nidInf = {};
  if (nidDetails) {
      nidInf["id"] =ethParse(nidDetails["id"]);
      nidInf["unixTime"] = new Date(parseInt(nidDetails["time"].toString()) * 1000);
  }

  return nidInf


  //  return Details;
  //  return await web3.eth.getInfo(name)


  }

 
module.exports={
  setUser : setUser,
  getInfo :getInfo
};