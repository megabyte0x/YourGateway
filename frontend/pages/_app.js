import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

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
      <Head>
        <title>FunTix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!ready ? (
        <div className="h-screen w-screen flex justify-center items-center">
          hola
        </div>
      ) : (
        <WagmiConfig client={wagmiClient}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </WagmiConfig>
      )}
    </>
  );
}
