CrossFi Hybrid DEX

A decentralized exchange on CrossFi, built on a hybrid network that connects Cosmos and EVM blockchains.

Winner of the DoraHacks CrossFi hackathon (2024). Built by one developer.

Overview

Cosmos and EVM chains usually live apart. This project connects them into one hybrid network on CrossFi and runs a full-featured decentralized exchange on top of it.

Hackathon: DoraHacks, CrossFi, 2024 (5,000+ participants), winner
DEX users: 1,000,000+
Team: 1 developer
<!-- Add 2-3 sentences on how Cosmos and EVM are linked (bridge, module, IBC) and how the DEX handles trades and liquidity. -->
Features
<!-- List only what exists in the code, one line each (for example: swap, liquidity pools, wallet connection). -->
Tech stack
Smart contracts: EVM, built and tested with Foundry
Network: CrossFi (Cosmos and EVM)
<!-- Add frontend, backend and any other tools. -->
Foundry

Foundry is a toolkit for Ethereum application development written in Rust. It consists of:

Forge: Ethereum testing framework (like Truffle, Hardhat and DappTools).
Cast: tool for interacting with EVM smart contracts, sending transactions and getting chain data.
Anvil: local Ethereum node, similar to Ganache and Hardhat Network.
Chisel: fast Solidity REPL.

Documentation: https://book.getfoundry.sh/

Usage
Build
shell
forge build
Test
shell
forge test
Format
shell
forge fmt
Gas snapshots
shell
forge snapshot
Local node
shell
anvil
Deploy
shell
forge script script/<Script>.s.sol:<Script> --rpc-url <your_rpc_url> --private-key <your_private_key>

Keep private keys out of the repository and shell history. Use an environment variable or a hardware wallet.

Cast
shell
cast <subcommand>
Help
shell
forge --help
anvil --help
cast --help
Deployments
<!-- Add network, contract addresses and explorer links. -->
Author

Full-stack, distributed systems, blockchain). Contact: masterofscience1993@gmail.com
