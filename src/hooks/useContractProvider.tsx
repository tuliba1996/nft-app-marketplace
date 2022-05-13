import { ethers } from "ethers";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../abis/NFTMarketplace.json";

export const useContractProvider = () => {
  const provider = new ethers.providers.JsonRpcProvider();
  return new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider);
};
