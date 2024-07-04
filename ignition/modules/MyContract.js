const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ContractModule", (m) => {

  const contract = m.contract("ExampleContract");

  return { contract };
});
