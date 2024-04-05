const hre = require("hardhat");
const { ethers } = hre;
require('dotenv').config({path:'../.env'});

async function main() {
const privateKey = process.env.PRIVATE_KEY;
const apiUrl = process.env.API_URL;

if(!privateKey){
    throw new Error ('Private key not found in environment variables')
}
if(!apiUrl){
    throw new Error ('API URL  not found in environment variables')
}


    // Define the desired token price in USD
// Define the desired token price in BNB
const desiredTokenPriceBNB = 0.00018;

// Convert the desired token price to wei, considering 18 decimal places
const desiredTokenPriceWei = ethers.utils.parseUnits(desiredTokenPriceBNB.toString(), "ether");

// desiredTokenPriceWei should now represent the price of 1 token in wei

    // DEPLOY TOKEN CONTRACT
    const MountTechSolution = await hre.ethers.getContractFactory("MountTechSolution");
    const initialSupply = ethers.utils.parseUnits("50000000", "ether"); // Initial supply of tokens
    const mountTechSolution = await MountTechSolution.deploy(initialSupply);
    await mountTechSolution.deployed();
    console.log(`MountTechSolution: ${mountTechSolution.address}`);

    // DEPLOY TOKEN SALE CONTRACT
    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy(mountTechSolution.address, desiredTokenPriceWei);
    await tokenSale.deployed();
    console.log(`TokenSale: ${tokenSale.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
