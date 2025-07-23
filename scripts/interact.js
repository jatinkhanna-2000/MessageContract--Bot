const hre = require("hardhat");

async function main() {
  const contractAddress = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"; // 👈 replace with your deployed address

  const MessageContract = await hre.ethers.getContractAt("MessageContract", contractAddress);

  // Read current message
  const currentMessage = await MessageContract.message();
  console.log("Current message:", currentMessage);

  // Update message
  const tx = await MessageContract.update("Hello from script!");
  await tx.wait();

  // Read updated message
  const newMessage = await MessageContract.message();
  console.log("Updated message:", newMessage);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
