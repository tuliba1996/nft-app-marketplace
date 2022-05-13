import { ethers } from "ethers";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../abis/NFTMarketplace.json";
import Web3Modal from "web3modal";

export const useContractSigner = async (opts?: any) => {
  const web3Modal = new Web3Modal(opts ? opts : {});
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  return new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer);
};
