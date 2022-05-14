import { ethers } from "ethers";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../abis/NFTMarketplace.json";

export const useContractProvider = (provider: any) => {
  return new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider);
};
