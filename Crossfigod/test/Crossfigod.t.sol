// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Crossfigod} from "../src/Crossfigod.sol";

contract CrossfigodTest is Test {
    Crossfigod public token;

    function setUp() public {
        token = new Crossfigod();
    }

    function testInitialBalance() public view {
        uint256 initialBalance = token.balanceOf(address(this));
        assertEq(initialBalance, 1000000 * 10 ** token.decimals());
    }

    function testTransfer() public {
        address recipient = address(0x123);
        uint256 amount = 100 * 10 ** token.decimals();

        token.transfer(recipient, amount);

        uint256 recipientBalance = token.balanceOf(recipient);
        assertEq(recipientBalance, amount);
    }

    function testFuzz_Transfer(uint256 amount) public {
        address recipient = address(0x123);

        // Cap the amount to avoid overflows or transferring more than the balance
        amount = bound(amount, 0, token.balanceOf(address(this)));

        token.transfer(recipient, amount);

        uint256 recipientBalance = token.balanceOf(recipient);
        assertEq(recipientBalance, amount);
    }
}
