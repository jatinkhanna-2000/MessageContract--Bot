# 🧠 MessageContract + Event Listener Bot (Solidity + Node.js + Hardhat)

A beginner-friendly smart contract project that includes:

- ✅ A Solidity contract that stores and updates a message
- ✅ An emitted event whenever the message is updated
- ✅ A Node.js bot that listens to those events in real-time
- ✅ Hardhat for local blockchain simulation and scripting

---

## 🚀 Features

- **Solidity Smart Contract**: `MessageContract` stores a public message on-chain
- **Event Emission**: Emits `MessageUpdated` on every message change
- **Node.js Listener Bot**: Listens for `MessageUpdated` events and logs them
- **Hardhat**: Used for local testing, deploying, and scripting interactions

---

## 📂 Project Structure
MessageContract/
├── contracts/
│ └── MessageContract.sol
├── scripts/
│ ├── deploy.js
│ ├── interact.js
│ └── listen.js
├── test/
│ └── test.js (optional)
├── hardhat.config.js
└── README.md

---

## 🛠️ How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/jatinkhanna-2000/MessageContract.git
   cd MessageContract

2. **Install Dependencies**
   npm install

3. **Start Hardhat local blockchain**
   npx hardhat node
   
4. **Deploy the Contract (in another terminal)**
   npx hardhat run scripts/deploy.js --network localhost

5. **Run the event listener bot**
   node scripts/listen.js

6. **Update the message using the interact script**
   npx hardhat run scripts/interact.js --network localhost


💡 **What I Have Learnt So Far -**

- How to write and deploy smart contracts using Solidity and Hardhat

- How to emit and listen for blockchain events in real-time using Node.js

- How to simulate a blockchain locally and interact with it through scripts

- Basics of full-stack dApp architecture (Solidity + Node.js).

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**🤖Telegram Bot Integration**

This project now includes a Telegram bot integration that listens to on-chain smart contract events and sends instant alerts to a Telegram group or chat.

🔔 **What It Does**
Whenever the MessageUpdated event is emitted from the deployed MessageContract, a Node.js script picks it up and:

- Logs the update to your terminal.

- Sends a Telegram message like:

(📨 Smart Contract Alert:
Message changed from "Old message" to "New message")

⚙️ **How It Works**
- We use Hardhat to interact with the contract.

- The scripts/listenAndSend.js file listens for MessageUpdated events.

- A .env file holds your sensitive Telegram bot token and chat ID (not committed to Git).

- Uses Axios to send messages via Telegram's Bot API.

## 🛠️ Setup Instructions

**Install dependencies**
- Make sure you've already installed:

npm install dotenv axios

**Create a .env file in your project root:**

TELEGRAM_TOKEN=your_bot_token_here
CHAT_ID=your_chat_id_here

**Update your script (listenAndSend.js) to use environment variables:**

require("dotenv").config();
const hre = require("hardhat");
const axios = require("axios");

const contractAddress = "0xYourContractAddressHere";
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function main() {
  const MessageContract = await hre.ethers.getContractAt("MessageContract", contractAddress);
  console.log("👂 Listening for MessageUpdated events...\n");

  MessageContract.on("MessageUpdated", async (oldMessage, newMessage) => {
    const text = `📨 Smart Contract Alert:\nMessage changed from "${oldMessage}" to "${newMessage}"`;

    console.log(text);

    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text,
      });
    } catch (error) {
      console.error("❌ Telegram Error:", error.response?.data || error.message);
    }
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

**Add .env to .gitignore (already done):**

.env


**✅ Benefits**
- No need to manually monitor the contract.

- Great for dev teams, live demos, hackathons, or production alerts.

- Keeps private keys & tokens secure with .env.

**📌 Future Improvements (Optional)**

-Use webhooks for better scalability.

-Add message formatting (bold, emoji, timestamp).

-Monitor multiple events/contracts.




Built by Jatin Khanna. Connect with me on LinkedIn or Star the repo if you found it useful.


   
