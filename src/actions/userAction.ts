import { createAsyncThunk } from "@reduxjs/toolkit";
import { useContractSigner } from "../hooks/useContractSigner";
import { serializerNft } from "../ultis/serializerNft";
import { JsonRpcProvider } from "@ethersproject/providers";

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
    const contractSigner = useContractSigner(provider);

    const data = await contractSigner.fetchMyNFTs();

    const items = serializerNft(data, contractSigner);

    return items;
  }
);
