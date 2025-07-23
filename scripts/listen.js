const hre = require("hardhat");

async function main() {
  // Get the deployed contract address
  const contractAddress = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";

  const MessageContract = await hre.ethers.getContractAt("MessageContract", contractAddress);

  console.log("Listening for MessageUpdated events...\n");

  MessageContract.on("MessageUpdated", (oldMessage, newMessage) => {
    console.log(`📨 Message updated from "${oldMessage}" to "${newMessage}"`);
  });

  // 👇 Keep the script running
  await new Promise(() => {});
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
