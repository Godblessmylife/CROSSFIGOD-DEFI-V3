const { ethers } = require("ethers");

// URL of the RPC for the CrossFi Testnet 
const providerUrl = "https://rpc.testnet.ms";
const privateKey = "a762399761e997ef50f5f35575401d4e3cffe0bb00d34f757e45ef9388e23482"; // Replace with your private key

// ABI and address of the contract
const abi = [
    "function setNumber(uint256 newNumber) public",
    "function increment() public",
    "function number() view returns (uint256)"
];
const contractAddress = "0xff01e33A8cFD3b5A8287066552D659Cf578A857d"; // Replace with the contract address

// Creating a provider and wallet to interact with the blockchain
const provider = new ethers.JsonRpcProvider(providerUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);

async function main() {
    try {
        // Set number to 10
        let tx = await contract.setNumber(10);
        await tx.wait(); // Wait for the transaction to be mined
        console.log("Number set to 10");

        // Increment the number
        tx = await contract.increment();
        await tx.wait(); // Wait for the transaction to be mined
        console.log("Number incremented");

        // Get the current number
        const number = await contract.number();
        console.log(`Current number: ${number.toString()}`);
    } catch (error) {
        console.error("Error interacting with contract:", error);
    }
}

main();
