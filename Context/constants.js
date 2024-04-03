// MountTechSolution: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// TokenSale: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

// //JASON FILE
import  MountTechSolution from "./MountTechSolution.json";
import TokenSale from "./TokenSale.json";

//TOKEN
export const TOKEN_ADDRESS = "0xb253A5A5eA4d899AE0348bFA3992b634B3EC37e1"
export const TOKEN_ABI = MountTechSolution.abi;

//TOKEN SALE
export const TOKEN_SALE_ADDRESS = "0xB847a15E6513f632ea05295FC0a4F4c2Ea31e727";
export const TOKEN_SALE_ABI = TokenSale.abi;




console.log(TokenSale.abi);