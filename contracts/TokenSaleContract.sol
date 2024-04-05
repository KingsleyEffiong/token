pragma solidity ^0.8.0;

import "./TheBlockchainCoders.sol";

contract TokenSale {
    address admin;
    MountTechSolution public tokenContract;
    uint256 public tokensSold;
    uint256 public desiredBnbAmount; // Desired amount of Ether to purchase 1 token

    event Sell(address _buyer, uint256 _amount);

    constructor(MountTechSolution _tokenContract, uint256 _desiredBnbAmount) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        desiredBnbAmount = _desiredBnbAmount;
    }
function buyToken() public payable {
    // Ensure that the desiredTokenPriceBNB is greater than zero
    require(desiredBnbAmount > 0, "Desired BNB amount per token must be greater than zero");

    // Ensure that the sender is sending BNB to purchase tokens
    require(msg.value > 0 , "Must send BNB to purchase tokens");

    // Calculate the number of tokens based on the amount of BNB sent
    uint256 numberOfTokens = msg.value / desiredBnbAmount;


    // Update tokens sold
    tokensSold += numberOfTokens;


    // Transfer tokens to the buyer
    tokenContract.transfer(msg.sender, numberOfTokens);

    // Emit event to log the purchase
    emit Sell(msg.sender, numberOfTokens);

     // Transfer BNB to the admin address
    payable(admin).transfer(msg.value);
}




    // END SALE
    function endSale() public {
        require(msg.sender == admin);
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));

        payable(admin).transfer(address(this).balance);
    }
}
