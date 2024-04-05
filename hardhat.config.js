require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const {API_URL, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    hardhat:{
      chainId: 1337
    },
    mainnet:{
      url:API_URL,
      chainId:56,
      accounts:[PRIVATE_KEY]
    }
  }
};

// 56
