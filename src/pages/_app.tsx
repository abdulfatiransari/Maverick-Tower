import { ThemeProvider } from "next-themes";
import "../../styles/globals.scss";

import Head from "next/head";
import Layout from "../components/Layout";
import { createContext, useEffect, useState } from "react";
import { initializeMoralis } from "../helpers/initializeMoralis";
import { EvmChain } from "moralis/common-evm-utils";
// import { RecoilRoot } from 'recoil';



interface GlobalContextProps {
  address?: string;
  connectMetaMask: () => void;
  moralis?: {
    chain?: EvmChain;
    Moralis?:any;
  };
}

export const GlobalContext = createContext<GlobalContextProps | null>(
  null
);
let navigationPropsCache: any;
export default function App({ Component, pageProps, }: any) {
    const [address, setAddress] = useState<string>("");
    const [moralis, setMoralis] = useState<any>();

useEffect(() => {
  initializeMoralis(setMoralis);
}, []);




  const connectMetaMask = async () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setAddress(res[0]);
      });
        
const chainId = await window.ethereum.request({ method: "eth_chainId" });
console.log(chainId)
    } else {
      alert("install metamask extension!!");
    }
  };
  return (
    <GlobalContext.Provider value={{ address, connectMetaMask, moralis }}>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Layout>
          <Head>
            {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"></link>
          </Head>
          {/* <RecoilRoot> */}
          <Component {...pageProps} />
          {/* </RecoilRoot> */}
        </Layout>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

