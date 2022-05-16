import { fetchNftListed } from "actions/userAction";
import { useEffect } from "react";
import { NftsComponent } from "../components/NftsComponent";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../hooks";
import { NftCard } from "../components";

export default function Dashboard() {
  const { nftsListed } = useAppSelector((state) => state.user);
  const { provider, connected } = useWeb3Context();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (connected) dispatch(fetchNftListed({ provider }));
  }, [connected]);

  return <NftCard title="NFT Listed" nfts={nftsListed} />;
}
