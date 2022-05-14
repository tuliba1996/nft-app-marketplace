import type { NextPage } from "next";
import { useEffect } from "react";
import { NftsComponent } from "../components/NftsComponent";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../hooks";
import { buyNft, fetchNftMarket } from "../actions/marketAction";
import { NftType } from "../type/marketType";

const Home: NextPage = () => {
  const { nfts } = useAppSelector((state) => state.market);
  const { loading } = useAppSelector((state) => state.market);
  const dispatch = useAppDispatch();

  const {
    connect,
    disconnect,
    connected,
    web3,
    provider,
    providerChainID,
    checkWrongNetwork,
  } = useWeb3Context();

  useEffect(() => {
    dispatch(fetchNftMarket({ provider }));
  }, [provider, providerChainID, web3]);

  const onClickBuyNft = (nft: NftType) => {
    dispatch(buyNft({ nft, provider }));
  };

  return <NftsComponent loading={loading} nfts={nfts} buyNft={onClickBuyNft} />;
};

export default Home;
