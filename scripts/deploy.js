const { ethers } = require("hardhat");

async function main() {
  const simpleStorageFactory = await hre.ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log("Greeter deployed to:", simpleStorage.address);

  const curVal = await simpleStorage.retrieve();
  console.log(`Current value: ${curVal}`);
  const txResponse = await simpleStorage.store(12);
  await txResponse.wait(1);
  const uptValue = await simpleStorage.retrieve();
  console.log(`Updated value: ${uptValue}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
