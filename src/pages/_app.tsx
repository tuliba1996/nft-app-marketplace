import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";
import { Web3ContextProvider } from "../hooks/web3";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Web3ContextProvider>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </Web3ContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
