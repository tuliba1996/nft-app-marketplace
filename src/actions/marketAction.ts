import { createAsyncThunk } from "@reduxjs/toolkit";
import { BigNumber, ethers } from "ethers";
import { useContractProvider } from "../hooks/useContractProvider";
import { NftType } from "../type/marketType";
import { useContractSigner } from "../hooks/useContractSigner";
import { store } from "../store";
import { serializerNft } from "../ultis/serializerNft";
import { fetchMyNft } from "./userAction";
import { JsonRpcProvider } from "@ethersproject/providers";

interface IFetchNftMarket {
  provider: JsonRpcProvider;
}

export const fetchNftMarket = createAsyncThunk(
  "market/fetchNftMarket",
  async ({ provider }: IFetchNftMarket) => {
    const contractProvider = useContractProvider(provider);

    const data = await contractProvider.fetchMarketItems();

    const items = serializerNft(data, contractProvider);

    return items;
  }
);

interface IBuyNft {
  nft: NftType;
  provider: JsonRpcProvider;
  router: any;
}

export const buyNft = createAsyncThunk(
  "market/buyNft",
  async ({ nft, provider, router }: IBuyNft) => {
    const contractSigner = await useContractSigner(provider);

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contractSigner.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();

    router.push("/my-nft");
  }
);

interface ITransferNft {
  nft: NftType;
  toAddress: string;
  provider: JsonRpcProvider;
}

export const transferNft = createAsyncThunk(
  "market/transferNft",
  async ({ nft, toAddress, provider }: ITransferNft) => {
    const contractSigner = await useContractSigner(provider);
    const { dispatch } = store;

    let transaction = await contractSigner.transferNft(
      toAddress,
      ethers.utils.hexValue(nft.tokenId)
    );
    await transaction.wait();
    dispatch(fetchMyNft({ provider }));
  }
);

interface IListNftForSale {
  url: string;
  price: BigNumber;
  router: any;
  provider: JsonRpcProvider;
}

export const listNftForSale = createAsyncThunk(
  "market/listNftForSale",
  async ({ url, price, router, provider }: IListNftForSale) => {
    const contractSigner = await useContractSigner(provider);
    let listingPrice = await contractSigner.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contractSigner.createToken(url, price, {
      value: listingPrice,
    });
    await transaction.wait();

    router.push("/");
  }
);
