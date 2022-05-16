import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";

import { useRouter } from "next/router";
import { useAppDispatch, useWeb3Context } from "../hooks";
import { listNftForSale } from "../actions/marketAction";
import { Button } from "@chakra-ui/react";
import { error } from "../slices/messages-slice";
import { messages } from "../constants/messages";

const client = ipfsHttpClient({ url: "https://ipfs.infura.io:5001" });

export default function CreateNft() {
  const [fileUrl, setFileUrl] = useState<string>("");

  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { provider, checkWrongNetwork } = useWeb3Context();

  async function onChangeFile(e: any) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload metadata to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after metadata is uploaded to IPFS, return the URL to use it in the transaction */
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const onListNFTForSale = async () => {
    if (await checkWrongNetwork()) return;

    const url = await uploadToIPFS();

    if (!url) {
      dispatch(error({ text: messages.input_info_mint_nft }));
      return;
    }

    const price = ethers.utils.parseUnits(formInput.price, "ether");
    if (url && price) {
      dispatch(listNftForSale({ url: url, price: price, router, provider }));
    }
  };

  return (
    <div className="create section__padding">
      <div className="create-container">
        <h1>Create new Item</h1>
        <form className="writeForm" autoComplete="off">
          <div className="formGroup">
            <label>Upload</label>
            <input
              onChange={onChangeFile}
              type="file"
              className="custom-file-input"
            />
          </div>
          <div className="formGroup">
            <label>Name</label>
            <input
              onChange={(e) =>
                updateFormInput({ ...formInput, name: e.target.value })
              }
              type="text"
              placeholder="Item Name"
              autoFocus={true}
            />
          </div>
          <div className="formGroup">
            <label>Description</label>
            <textarea
              onChange={(e) =>
                updateFormInput({ ...formInput, description: e.target.value })
              }
              placeholder="Decription of your item"
            />
          </div>
          <div className="formGroup">
            <label>Price</label>
            <div className="twoForm">
              <input
                onChange={(e) =>
                  updateFormInput({ ...formInput, price: e.target.value })
                }
                type="text"
                placeholder="Price"
              />
              <select>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="LTC">LTC</option>
              </select>
            </div>
          </div>
          <Button onClick={() => onListNFTForSale()} className="writeButton">
            Create Item
          </Button>
        </form>
      </div>
    </div>
  );
}
