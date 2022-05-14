import { fetchNftListed } from "actions/userAction";
import { useEffect } from "react";
import { NftsComponent } from "../components/NftsComponent";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../hooks";

export default function Dashboard() {
  const { nftsListed } = useAppSelector((state) => state.user);
  // const { loading } = useAppSelector((state) => state.user);
  const { provider } = useWeb3Context();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNftListed({ provider }));
  }, [provider, dispatch]);

  return <NftsComponent nfts={nftsListed} />;
}
