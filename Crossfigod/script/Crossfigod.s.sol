// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Crossfigod} from "../src/Crossfigod.sol";

contract CrossfigodScript is Script {
    Crossfigod public token;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        token = new Crossfigod();

        vm.stopBroadcast();
    }
}
