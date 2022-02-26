// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyToken is ERC777 {
	// IERC20 Interface lets us call IERC20 functions in other ERC20 contracts
	// TODO: Replace Address here with the token address you're targetting
	IERC20 otherToken = IERC20(address(0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1));

	// Owner of the contract
	address private owner;

	// TODO: Replace Token Name and Symbol
	constructor() ERC777("MyToken", "MT", new address[](0)) {
		owner = msg.sender; 																													// Set Deployer Address as the Owner
	}

	mapping(address => uint) private deposited;
	function swap(uint amount) public {
		otherToken.transferFrom(msg.sender, address(this), amount); 									// Transfer tokens from caller account to THIS Contract
		_mint(msg.sender, amount, "", ""); 																						// Mint New Tokens
	}

	// Modifier to restrict access to Owner
	modifier onlyOwner() {
		require(msg.sender == owner, "Access Denied");
		_;
	}

	// Function to withdraw
	// Only Owner can call it
	// Transfers a specific amount to Owner's account
	function withdraw(uint amount) public onlyOwner {
		otherToken.transfer(owner, amount);																						// Transfer from THIS Contract to Owner
	}

	// Function to withdraw entire token balance
	// Only Owner can call it
	// address(this) returns the Contract Address
	// Transfers the entire balance to Owner's account
	function withdrawAll() public onlyOwner {
		otherToken.transfer(owner, otherToken.balanceOf(address(this)));							// Transfer entire token balance of THIS Contract to Owner
	}
}