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
    const desiredTokenPriceUSD = 0.00018; // $0.10

    // Convert the desired token price to wei
    const desiredTokenPriceWei = ethers.utils.parseEther(desiredTokenPriceUSD.toString());
    

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
