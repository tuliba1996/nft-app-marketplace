import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";

export const useWeb3Provider = async (opts?: any) => {
  const [address, setAddress] = useState("");
  const web3Modal = new Web3Modal(opts ? opts : {});

  const instance = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(instance);

  provider.on("accountsChanged", (accounts: string[]) => {
    console.log(accounts);
    setAddress("duan huynh");
  });
  return [provider, address];
};
