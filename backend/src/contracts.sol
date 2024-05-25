// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.2;
import "hardhat/console.sol";

contract  Test{
    function print () public {
        console.log(msg.sender);
    }
}