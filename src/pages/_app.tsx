import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";
import { Web3ContextProvider } from "../hooks";
import { SnackbarProvider } from "notistack";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <SnackbarProvider
        maxSnack={4}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={5000}
      >
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
      </SnackbarProvider>
    </React.StrictMode>
  );
}

export default MyApp;
