import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      {/*<Header />*/}
      <NavBar />
      <Container maxW="sizes.full" className="home-container">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
