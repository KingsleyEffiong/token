// MountTechSolution: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// TokenSale: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

// //JASON FILE
import  MountTechSolution from "./MountTechSolution.json";
import TokenSale from "./TokenSale.json";

//TOKEN
export const TOKEN_ADDRESS = "0x0C5F32C0a839941831AE1b8730DaE63F6C82cE87"
export const TOKEN_ABI = MountTechSolution.abi;

//TOKEN SALE
export const TOKEN_SALE_ADDRESS = "0x0ee2108B90E05cC4ACAE5CBe938cF106232d684e";
export const TOKEN_SALE_ABI = TokenSale.abi;




console.log(TokenSale.abi);