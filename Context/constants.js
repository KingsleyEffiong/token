// MountTechSolution: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// TokenSale: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

// //JASON FILE
import  MountTechSolution from "./MountTechSolution.json";
import TokenSale from "./TokenSale.json";

//TOKEN
export const TOKEN_ADDRESS = "0xfd6CF8b3943adB176E092248b762CF9fB517E446"
export const TOKEN_ABI = MountTechSolution.abi;

//TOKEN SALE
export const TOKEN_SALE_ADDRESS = "0x7D2F74e588e7c21B9Fad0B031F94fd93EA6F7D77";
export const TOKEN_SALE_ABI = TokenSale.abi;




console.log(TokenSale.abi);