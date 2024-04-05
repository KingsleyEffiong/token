// MountTechSolution: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// TokenSale: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

// //JASON FILE
import  MountTechSolution from "./MountTechSolution.json";
import TokenSale from "./TokenSale.json";

//TOKEN
export const TOKEN_ADDRESS = "0x5a9DF31DFcB270621714CF036E10B361c755aA5E"
export const TOKEN_ABI = MountTechSolution.abi;

//TOKEN SALE
export const TOKEN_SALE_ADDRESS = "0x3645cEe539de9E3880E1882257A714a8389F644C";
export const TOKEN_SALE_ABI = TokenSale.abi;




console.log(TokenSale.abi);