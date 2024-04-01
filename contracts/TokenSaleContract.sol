pragma solidity ^0.8.0;

import "./TheBlockchainCoders.sol";

contract TokenSale {
    address admin;
    MountTechSolution public tokenContract;
    uint256 public tokensSold;
    uint256 public desiredEtherAmount; // Desired amount of Ether to purchase 1 token

    event Sell(address _buyer, uint256 _amount);

    constructor(MountTechSolution _tokenContract, uint256 _desiredEtherAmount) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        desiredEtherAmount = _desiredEtherAmount;
    }
function buyToken() public payable {
    require(desiredEtherAmount > 0, "Desired Ether amount must be greater than zero");
    require(msg.value > 0 , "Must send Ether to purchase tokens");

    // Calculate the number of tokens to purchase based on the amount of Ether sent
    uint256 numberOfTokens = msg.value * 10 ** tokenContract.decimals() / desiredEtherAmount;

    // Ensure that the buyer is purchasing at least 1 token
    require(numberOfTokens >= 500, "Insufficient Ether sent to purchase any tokens");

    // Transfer tokens to the buyyer
    tokenContract.transfer(msg.sender, numberOfTokens);

    // Update tokens sold
    tokensSold += numberOfTokens;

    // Emit event and update state
    emit Sell(msg.sender, numberOfTokens);
}

    // END SALE
    function endSale() public {
        require(msg.sender == admin);
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));

        payable(admin).transfer(address(this).balance);
    }
}
