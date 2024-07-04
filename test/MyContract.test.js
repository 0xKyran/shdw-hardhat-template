const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mycontract", function () {
    let Contract;
    let contract;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
      Contract = await ethers.getContractFactory("MyContract");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        contract = await Contract.deploy("ExampleContract");  // Deploy the contract
    });

    describe("Deployment", function () {
        it("Should have the correct name", async function () {
            expect(await contract.getName()).to.equal("ExampleContract");
        });
    });
});
