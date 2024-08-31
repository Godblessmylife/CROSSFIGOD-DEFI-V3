const { ethers } = require('ethers');

// RPC provider setup
const provider = new ethers.JsonRpcProvider('https://rpc.testnet.ms');

// Sender's private key (Replace with the actual private key)
const privateKey = 'a762399761e997ef50f5f35575401d4e3cffe0bb00d34f757e45ef9388e23482';

// Create a signer
const wallet = new ethers.Wallet(privateKey, provider);

// Token contract address and ABI
const tokenAddress = '0xB9D6c14F1e6d140fCFeaF5044A271bd561b37757';
const abi = [
    "function transfer(address to, uint256 amount) public returns (bool)"
];

// Create a contract instance
const tokenContract = new ethers.Contract(tokenAddress, abi, wallet);

// Receiver's address and amount to transfer
const toAddress = '0xD86ed942c5031d11c292ba957f1DDD5847798f11';
const amount = ethers.parseUnits('700000.0', 18); // 10 tokens with 18 decimals

async function sendTransaction() {
    try {
        // Send transaction
        const tx = await tokenContract.transfer(toAddress, amount);

        // Wait for the transaction to be mined
        await tx.wait();

        console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}

sendTransaction();
