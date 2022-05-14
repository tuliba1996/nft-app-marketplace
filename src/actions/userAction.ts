import { createAsyncThunk } from "@reduxjs/toolkit";
import { useContractSigner } from "../hooks/useContractSigner";
import { serializerNft } from "../ultis/serializerNft";
import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../abis/NFTMarketplace.json";

interface IFetchNft {
  provider: JsonRpcProvider;
}

export const fetchNftListed = createAsyncThunk(
  "user/fetchNftListed",
  async ({ provider }: IFetchNft) => {
    const contractSigner = useContractSigner(provider);

    const data = await contractSigner.fetchItemsListed();

    const items = serializerNft(data, contractSigner);

    return items;
  }
);

export const fetchMyNft = createAsyncThunk(
  "user/fetchMyNft",
  async ({ provider }: IFetchNft) => {
    // const contractSigner = useContractSigner(provider);

    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const t = await signer.getAddress();
    console.log("contract", t);
    const data = await contract.fetchMyNFTs();
    console.log("data");

    const items = serializerNft(data, contract);

    return items;
  }
);
