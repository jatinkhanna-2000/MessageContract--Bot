const hre = require("hardhat");
const axios = require("axios");

// Replace these with your actual values
const contractAddress = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
const TELEGRAM_TOKEN = "8479931833:AAFchpErBQnQAf33mZE90dWG27-dosvzhcs";
const CHAT_ID = -4866702517;

async function main() {
  const MessageContract = await hre.ethers.getContractAt("MessageContract", contractAddress);

  console.log("👂 Listening for MessageUpdated events...\n");

  MessageContract.on("MessageUpdated", async (oldMessage, newMessage) => {
    const text = `📨 Smart Contract Alert:\nMessage changed from "${oldMessage}" to "${newMessage}"`;

    console.log(text);

    // Send to Telegram
    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text
      });
    } catch (error) {
      console.error("❌ Failed to send Telegram message:", error.response?.data || error.message);
    }
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
