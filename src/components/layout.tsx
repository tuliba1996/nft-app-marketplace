import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Header />
      <Container maxW="sizes.full" className="home-container">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
