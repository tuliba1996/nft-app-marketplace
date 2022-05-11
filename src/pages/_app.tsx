import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import { Provider } from "react-redux";
// import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/*<Provider>*/}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/*</Provider>*/}
    </ChakraProvider>
  );
}

export default MyApp;
