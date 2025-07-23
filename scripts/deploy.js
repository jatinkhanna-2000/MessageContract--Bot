const { ethers } = require("hardhat");

async function main() {
  const MessageContract = await ethers.getContractFactory("MessageContract");
  const messageContract = await MessageContract.deploy(); // ✅ No arguments here
  await messageContract.waitForDeployment();

  console.log("MessageContract deployed to:", await messageContract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
