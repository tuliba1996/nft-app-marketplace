import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../hooks";
import { fetchNftMarket } from "../actions/marketAction";
import { Header, NftCard } from "../components";
import { warning } from "slices/messages-slice";
import { messages } from "../constants/messages";

const Home: NextPage = () => {
  const { nfts } = useAppSelector((state) => state.market);
  const dispatch = useAppDispatch();

  const { provider } = useWeb3Context();

  useEffect(() => {
    dispatch(fetchNftMarket({ provider }));
  }, []);

  return (
    <>
      <Header />
      <NftCard title="NFT Market" nfts={nfts} />
    </>
  );
};

export default Home;
