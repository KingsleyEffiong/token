import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { TOKEN_ABI, TOKEN_ADDRESS, TOKEN_SALE_ABI, TOKEN_SALE_ADDRESS } from "../Context/constants";

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        })

        const firstAccount = accounts[0];
        return firstAccount
    } catch (error) {
        console.log(error);
    }
}

export const connectWallet = async () => {
    try {
        // Check if window.ethereum is available
        if (!window.ethereum) throw new Error("MetaMask or compatible wallet not detected. Please install MetaMask or connect using another Ethereum wallet.");

        // Request user authorization to connect
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        // Return the first account
        return accounts[0];
    } catch (error) {
        console.error("Wallet connection error:", error);
        throw error; // Rethrow the error for handling in the calling code
    }
}


//TOKEN CONTRACT

const fetchTokenContract = (signerOrProvider) =>
    new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signerOrProvider);
export const connectingTOKEN_CONTRACT = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchTokenContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}

//GET BALANCE
export const getBalance = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        return await signer.getBalance();
    } catch (error) {
        console.log(error);
    }
}

//TOKEN SALE CONTRACT
const fetchToken_SALE_Contract = (signerOrProvider) =>
    new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);
export const connectingTOKEN_SALE_CONTRACT = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchToken_SALE_Contract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}
