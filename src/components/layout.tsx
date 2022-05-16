import { ReactNode, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { MainFooter } from "./MainFooter";
import { useWeb3Context } from "hooks";
import { Footer, Navbar } from "./index";
import ethLogo from "../assets/ethlogo.png";
import Head from "next/head";
import Messages from "./Messages";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { connect, provider, hasCachedProvider, chainID, connected } =
    useWeb3Context();

  useEffect(() => {
    if (hasCachedProvider()) {
      connect().then(() => {});
    }
  }, []);

  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <link rel="icon" href={ethLogo.src} />
      </Head>
      <Messages />
      <Navbar />
      <Container maxW="sizes.full" className="home-container">
        {props.children}
      </Container>
      <Footer />
      <MainFooter />
    </div>
  );
}
