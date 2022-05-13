import { useEffect } from "react";
import { NftsComponent } from "../components/NftsComponent";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchNftListed } from "../actions/userAction";

export default function Dashboard() {
  const { nftsListed } = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNftListed());
  }, []);

  return <NftsComponent nfts={nftsListed} loading={loading} />;
}
