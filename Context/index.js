import React,  {useState, useEffect, createContext, useContext} from "react";
import {ethers} from "ethers";

//INTERNAL IMPORT 
import{
    CheckIfWalletConnected, 
    connectWallet,
    connectingTOKEN_CONTRACT,
    getBalance,
    connectingTOKEN_SALE_CONTRACT
}from"../Utils/index";



const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const TOKEN_ICO = "TOKEN SALL DAPP";
    const [address, setAddress] = useState("");
    const  [balance, setBalance] =  useState("");
    const  [nativeToken, setNativeToken] =  useState("");
    const  [tokenHolders, setTokenHolders] =  useState("");
    const  [tokenSale, setTokenSale] =  useState("");
    const  [currentHolder, setCurrentHolder] =  useState("");


//FETCH CONTRACT DATA
const fetchInitialData = async()=>{
    try{
        //GET USER ACCOUNT
        const account  = await CheckIfWalletConnected()
        //GET USER BALANCE
        const balance  = await getBalance();
        setBalance(ethers.utils.formatEther (balance.toString()));
        setAddress(account);

        //TOKEN CONTRACT
        const TOKEN_CONTRACT = await connectingTOKEN_CONTRACT();
        
        let tokenBalance;
        if(account){
            tokenBalance =  await TOKEN_CONTRACT.balanceOf(account)
        }else{
            tokenBalance = 0;
        }

        //GET ALL TOKEN DATA
        const tokenName =  await TOKEN_CONTRACT.name();
        const tokenSymbol =  await TOKEN_CONTRACT.symbol();
        const tokenTotalSupply =  await TOKEN_CONTRACT.totalSupply();
        const tokenStandard =  await TOKEN_CONTRACT.standard();
        const tokenHolders =  await TOKEN_CONTRACT._userId();
        const tokenOwnerOfContract =  await TOKEN_CONTRACT.ownerOfContract();
        const tokenAddress =  await TOKEN_CONTRACT.address;

        const nativeToken = {
            tokenAddress: tokenAddress,
            tokenName: tokenName,
            tokenSymbol: tokenSymbol,
            tokenOwnerOfContract: tokenOwnerOfContract,
            tokenStandard: tokenStandard,
            tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()), // This may be fine if you want to show the total supply with decimals
            tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
            tokenHolders: tokenHolders.toNumber()
        };
        
        setNativeToken(nativeToken);

        //GETTING TOKEN HOLDERS
        const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();;
        setTokenHolders(getTokenHolder);

        //GETTINF TOKEN HOLDER DATA
        if(account){
            const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(account);
            const currentHolder = {
                tokenId: getTokenHolderData[0].toNumber(),
                from: getTokenHolderData[1],
                to: getTokenHolderData[2],
                totalToken: ethers.utils.formatEther(getTokenHolderData[3].toString()),
                tokenHolder: getTokenHolderData[4]
            };
            setCurrentHolder(currentHolder)
        };

        //TOKEN SALE CONTRACT
        const TOKEN_SALE_CONTRACT =  await connectingTOKEN_SALE_CONTRACT();
        const tokenPrice =  await TOKEN_SALE_CONTRACT.desiredBnbAmount();
        const tokenSold =  await TOKEN_SALE_CONTRACT.tokensSold();
        const tokenSaleBalance =  await TOKEN_CONTRACT.balanceOf('0x3645cEe539de9E3880E1882257A714a8389F644C')

        const tokenSale = {
            tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
            tokenSold: tokenSold.toNumber(),
            tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString())
        }

        setTokenSale(tokenSale);
   

        console.log(tokenSale);  
        console.log(currentHolder);  
        console.log(nativeToken);  
    }catch(error){
        console.log(error);
    }
}

useEffect(()=>{
    fetchInitialData()
}, []);
 
//BUY TOKEN
const buyToken = async (nToken) => {
    try {
        const amount = ethers.utils.parseUnits(nToken.toString(), 'ether');
        const contract = await connectingTOKEN_SALE_CONTRACT();

        const buying = await contract.buyToken({
            value: amount.toString(),
        }); 
        await buying.wait();
        console.log(buying);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}


    //NATIVE TOKEN TRANSFER
    const transferNativeToken = async(nToken)=>{

        try{
            const TOKEN_SALE_ADDRESS = "0x3645cEe539de9E3880E1882257A714a8389F644C";
            const TOKEN_AMOUNT = 6500000;
            const tokens = TOKEN_AMOUNT.toString();
            const transferAmount = ethers.utils.parseEther(tokens)

            const contract = await connectingTOKEN_CONTRACT()
            const transaction = await contract.transfer(
                TOKEN_SALE_ADDRESS,
                transferAmount
            );

            console.log(contract);
            await transaction.wait();
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    }
    return(
    <StateContext.Provider value={{transferNativeToken, 
        buyToken ,connectWallet, setAddress, TOKEN_ICO, currentHolder, tokenSale, tokenHolders, nativeToken, balance, address,}}> {children} </StateContext.Provider>
    );
};

export const  useStateContext = ()=> useContext(StateContext);