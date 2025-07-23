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

2. Install Dependencies
   npm install

3. Start Hardhat local blockchain
   npx hardhat node
   
4. Deploy the Contract (in another terminal)
   npx hardhat run scripts/deploy.js --network localhost

5. Run the event listener bot
   node scripts/listen.js

6. Update the message using the interact script
   npx hardhat run scripts/interact.js --network localhost


💡 What I Have Learnt So Far -

- How to write and deploy smart contracts using Solidity and Hardhat

- How to emit and listen for blockchain events in real-time using Node.js

- How to simulate a blockchain locally and interact with it through scripts

- Basics of full-stack dApp architecture (Solidity + Node.js)


Built by Jatin Khanna. Connect with me on LinkedIn or Star the repo if you liked it or found it useful.


   
