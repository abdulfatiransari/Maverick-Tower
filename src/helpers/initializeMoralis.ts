import Moralis from "moralis";
import { EvmChain } from "moralis/common-evm-utils";

export const initializeMoralis = async (setMoralis:(val:any) => void) => {
  if (!Moralis.Core.isStarted) {
    const chain = EvmChain.ETHEREUM;
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    });
    setMoralis({ chain, Moralis });
  }
};
