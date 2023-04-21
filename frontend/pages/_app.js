import "@/styles/globals.css";
// import { Spinner } from "@chakra-ui/react";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import React from "react";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/provider";

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai, polygon],
  [alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});

export default function App({ Component, pageProps }) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {!ready ? (
        <div className="h-screen w-screen flex justify-center items-center">
          {/* <Spinner color="black" size="xl" /> */}
          Loading
        </div>
      ) : (
        <WagmiConfig client={wagmiClient}>
          <ChakraProvider>
            <Header />
            <Component {...pageProps} />
            {/* <Footer /> */}
          </ChakraProvider>
        </WagmiConfig>
      )}
    </>
  );
}
