const { ethers } = require('ethers');

// Set up the provider
const provider = new ethers.JsonRpcProvider('https://rpc.testnet.ms');

// Token Contract Address
const tokenAddress = '0xB9D6c14F1e6d140fCFeaF5044A271bd561b37757';

// ABI for ERC20 balanceOf function
const abi = [
    "function balanceOf(address owner) view returns (uint256)"
];

// Create a contract instance
const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

// Address to check balance for
const addressToCheck = '0x8B92CF5FDba7E699d5daD43a05f770E6C5599079';

async function checkBalance() {
    try {
        // Fetch balance
        const balance = await tokenContract.balanceOf(addressToCheck);

        // Format balance (assuming the token has 18 decimals)
        const formattedBalance = ethers.formatUnits(balance, 18);

        console.log(`Balance of ${addressToCheck}: ${formattedBalance} CFG`);
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}

checkBalance();
