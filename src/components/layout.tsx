import { ReactNode, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { useAddress, useWeb3Context } from "hooks";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { connect, provider, hasCachedProvider, chainID, connected } =
    useWeb3Context();
  const address = useAddress();

  useEffect(() => {
    if (hasCachedProvider()) {
      connect().then(() => {});
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Container maxW="sizes.full" className="home-container">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
