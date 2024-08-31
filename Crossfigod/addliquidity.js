const { ethers } = require('ethers');

// Setup provider and wallet
const provider = new ethers.JsonRpcProvider('https://rpc.testnet.ms');
const privateKey = 'a762399761e997ef50f5f35575401d4e3cffe0bb00d34f757e45ef9388e23482';
const wallet = new ethers.Wallet(privateKey, provider);

// Uniswap Router Contract Address and ABI (Example)
const routerAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564'; // Replace with the actual router contract address
const routerABI = [ /* ABI goes here */ ];

// Token Addresses
const tokenA = '0xB9D6c14F1e6d140fCFeaF5044A271bd561b37757'; // Your token address
const tokenB = '0xdb5c548684221ce2f55f16456ec5cf43a028d8e9'; // Secondary token address

// Create contract instances
const router = new ethers.Contract(routerAddress, routerABI, wallet);

// Amounts
const amountA = ethers.parseUnits('10', 18); // Amount of Token A
const amountB = ethers.parseUnits('10', 18); // Amount of Token B

async function addLiquidity() {
    try {
        // Approve tokens
        const tokenAContract = new ethers.Contract(tokenA, ['function approve(address spender, uint256 amount) public returns (bool)'], wallet);
        const tokenBContract = new ethers.Contract(tokenB, ['function approve(address spender, uint256 amount) public returns (bool)'], wallet);

        await tokenAContract.approve(routerAddress, amountA);
        await tokenBContract.approve(routerAddress, amountB);

        // Add liquidity
        const tx = await router.addLiquidity(
            tokenA,
            tokenB,
            amountA,
            amountB,
            amountA,
            amountB,
            wallet.address,
            Math.floor(Date.now() / 1000) + 60 * 10 // deadline
        );

        // Wait for transaction to be mined
        await tx.wait();

        console.log('Liquidity added successfully!');
    } catch (error) {
        console.error('Error adding liquidity:', error);
    }
}

addLiquidity();
