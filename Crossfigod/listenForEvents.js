const { ethers } = require("ethers");

// URL of the RPC for the CrossFi Testnet 
const providerUrl = "https://rpc.testnet.ms";

// ABI and address of the contract
const abi = [
    // Add the ABI of the contract you want to interact with
    "event EventName(address indexed sender, uint256 value)"
];
const contractAddress = "0xContractAddressHere"; // Replace with the contract address

// Creating a provider and contract instance
const provider = new ethers.JsonRpcProvider(providerUrl);
const contract = new ethers.Contract(contractAddress, abi, provider);

function main() {
    contract.on("EventName", (sender, value) => {
        console.log(`Event received: Sender: ${sender}, Value: ${value}`);
    });

    console.log("Listening for events...");
}

main().catch((error) => {
    console.error("Error listening for events:", error);
});
