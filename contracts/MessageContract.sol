// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageContract {
    string public message;

    // 👇 New event
    event MessageUpdated(string oldMessage, string newMessage);

    constructor() {
        message = "Hello, World!";
    }

    function update(string memory newMessage) public {
        string memory oldMessage = message;
        message = newMessage;

        // 👇 Emit event
        emit MessageUpdated(oldMessage, newMessage);
    }
}
