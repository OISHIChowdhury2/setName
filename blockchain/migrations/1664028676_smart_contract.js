var Info = artifacts.require("./SmartContract")

module.exports = (_deployer) => {
  // Use deployer to state migration tasks.
    _deployer.deploy(Info);
};
