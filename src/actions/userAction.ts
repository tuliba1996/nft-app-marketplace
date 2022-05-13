import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useContractSigner } from "../hooks/useContractSigner";
import { serializerNft } from "../ultis/serializerNft";

export const connectWalletAction = createAsyncThunk(
  "user/connectWallet",
  async (param?: {}) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const accounts = await provider.send("eth_requestAccounts", []);
    if (accounts.length > 0) return accounts[0];
  }
);

export const fetchNftListed = createAsyncThunk(
  "user/fetchNftListed",
  async (param?: {}) => {
    const contractSigner = await useContractSigner({
      network: "mainnet",
      cacheProvider: true,
    });

    const data = await contractSigner.fetchItemsListed();

    const items = serializerNft(data, contractSigner);

    return items;
  }
);

export const fetchMyNft = createAsyncThunk(
  "user/fetchMyNft",
  async (param?: {}) => {
    const contractSigner = await useContractSigner({
      network: "mainnet",
      cacheProvider: true,
    });

    const data = await contractSigner.fetchMyNFTs();

    const items = serializerNft(data, contractSigner);

    return items;
  }
);
