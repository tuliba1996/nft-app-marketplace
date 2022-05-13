import { NftType } from "../type/marketType";
import axios from "axios";
import { ethers } from "ethers";

export const serializerNft = async (data: NftType[], contractProvider: any) => {
  return await Promise.all(
    data.map(async (i: any) => {
      const tokenUri = await contractProvider.tokenURI(i.tokenId);
      const meta = await axios.get(tokenUri);
      let price = ethers.utils.formatUnits(i.price.toString(), "ether");
      return {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      };
    })
  );
};
