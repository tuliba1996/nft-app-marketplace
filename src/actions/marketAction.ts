import { createAsyncThunk } from "@reduxjs/toolkit";
import { BigNumber, ethers } from "ethers";
import { useContractProvider } from "../hooks/useContractProvider";
import { NftType } from "../type/marketType";
import { useContractSigner } from "../hooks/useContractSigner";
import { store } from "../store";
import { serializerNft } from "../ultis/serializerNft";
import { fetchMyNft } from "./userAction";
import { useRouter } from "next/router";

export const fetchNftMarket = createAsyncThunk(
  "market/fetchNftMarket",
  async (param?: {}) => {
    const contractProvider = useContractProvider();

    const data = await contractProvider.fetchMarketItems();

    const items = serializerNft(data, contractProvider);

    return items;
  }
);

export const buyNft = createAsyncThunk(
  "market/buyNft",
  async (nft: NftType) => {
    const contractSigner = await useContractSigner();
    const { dispatch } = store;

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contractSigner.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    dispatch(fetchNftMarket());
  }
);

export const transferNft = createAsyncThunk(
  "market/transferNft",
  async (param: { nft: NftType; toAddress: string }) => {
    const contractSigner = await useContractSigner();
    const { dispatch } = store;

    let transaction = await contractSigner.transferNft(
      param.toAddress,
      ethers.utils.hexValue(param.nft.tokenId)
    );
    await transaction.wait();
    dispatch(fetchMyNft());
  }
);

export const listNftForSale = createAsyncThunk(
  "market/listNftForSale",
  async (param: { url: string; price: BigNumber }) => {
    const router = useRouter();
    const contractSigner = await useContractSigner();

    let listingPrice = await contractSigner.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contractSigner.createToken(param.url, param.price, {
      value: listingPrice,
    });
    await transaction.wait();

    router.push("/");
  }
);
