const { ethers } = require("ethers");

// URL of the RPC for the CrossFi Testnet 
const providerUrl = "https://rpc.testnet.ms";

// Creating a provider to interact with the blockchain

const provider = new ethers.JsonRpcProvider(providerUrl);
async function main() {
	// Getting the current block number as a test of the connection
	const blockNumber = await provider.getBlockNumber();
	console.log(`Current block number: ${blockNumber}`);
}

main().catch((error) => {
	console.error("Error connecting to the blockchain:", error);
});