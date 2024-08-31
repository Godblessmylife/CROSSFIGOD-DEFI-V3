// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Crossfigod is ERC20 {
    constructor() ERC20("Crossfigod", "CFG") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
