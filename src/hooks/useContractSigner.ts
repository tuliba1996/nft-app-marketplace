import { ethers } from "ethers";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../abis/NFTMarketplace.json";
import { JsonRpcProvider } from "@ethersproject/providers";

export const useContractSigner = (provider: JsonRpcProvider) => {
  const signer = provider.getSigner();

  return new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer);
};
