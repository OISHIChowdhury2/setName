const Web3 = require("web3");
const config = require("./main");

const web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.88.97:7545"));

web3.eth.defaultAccount = "0x2E4d62Aa40Ce429a396484D65817b36BED0366A3";

async function isEthAlive() {
  let status = await web3.eth.net.isListening();
  return status;
}

(async function () {
  console.log("[INFO] Starting app...");
  console.log(`[INFO] Node status ${await isEthAlive()}`);

  //initialinze Nid SmartContract in NidContract variable
  const SetGetContract = new web3.eth.Contract(config.abi, config.address, {
    from: web3.eth.defaultAccount, // default from address
    gasPrice: "20000000000", // default gas price in wei, 20 gwei in this case
  });

  SetGetContract.methods
    .setName("Nahid")
    .send({ from: web3.eth.defaultAccount })
    .on("transactionHash", (hash) => {
      console.log(hash);
    });

    SetGetContract.methods
    .setAddres("Naraengong")
    .send({ from: web3.eth.defaultAccount })
    .on("transactionHash", (hash) => {
      console.log(hash);
    });

    SetGetContract.methods
    .setPhone("0392808504")
    .send({ from: web3.eth.defaultAccount })
    .on("transactionHash", (hash) => {
      console.log(hash);
    });
  console.log(await SetGetContract.methods.getName().call());
  console.log(await SetGetContract.methods.getAddres().call());
  console.log(await SetGetContract.methods.getphone().call());
})();
