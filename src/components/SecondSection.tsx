import { useTheme } from "next-themes";
import Icons from "./Icons";
import { useContext } from "react";
import { ThemeContext } from "./Layout";

type Props = {};

const SecondSection = (props: Props) => {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);
  const dropShadow = {
    filter:
      "drop-shadow(0px 128px 51px rgba(0, 0, 0, 0.01)) drop-shadow(0px 72px 43px rgba(0, 0, 0, 0.05)) drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.09)) drop-shadow(0px 8px 18px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1))",
  };

  return (
    <div
      className="flex w-full items-center justify-between gap-x-[0rem]
        max-sm:max-w-[100vw] max-sm:overflow-hidden max-sm:flex max-sm:flex-col-reverse max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]"
    >
      <div
        className="flex flex-col gap-y-[1rem] w-1/2
            max-sm:w-full max-sm:pb-[30px]"
      >
        <div>
          <p
            className="opacity-60 text-[24px] font-[Infra] font-normal
                    max-sm:text-[18px]"
            style={{ color: resolvedTheme === "dark" ? "#FFFFFF" : "#131219" }}
          >
            New protocols added daily
          </p>
        </div>
        <div
          className="flex gap-x-[1rem] max-sm:gap-x-[0.5rem]"
          style={dropShadow}
        >
          <Icons dark="/icons/pulsed.svg" light="/icons/pulsel.svg" />
          <Icons dark="/icons/investd2.svg" light="/icons/investl.svg" />
          <Icons dark="/icons/cubed.svg" light="/icons/cubel.svg" />
          <Icons dark="/icons/shibd.svg" light="/icons/shibl.svg" />
          <Icons dark="/icons/pulsexd.svg" light="/icons/pulsexl.svg" />
          <Icons dark="/icons/leafd.svg" light="/icons/leafl.svg" />
        </div>

        <div
          className="flex gap-x-[1rem] max-sm:gap-x-[0.5rem]"
          style={dropShadow}
        >
          <Icons dark="/icons/hexad.svg" light="/icons/hexal.svg" />
          <Icons dark="/icons/coind.svg" light="/icons/coinl.svg" />
          <Icons dark="/icons/shipd.svg" light="/icons/shipl.svg" />
          <Icons dark="/icons/dollard.svg" light="/icons/dollarl.svg" />
          <Icons dark="/icons/ringd.svg" light="/icons/ringl.svg" />
          <Icons dark="/icons/sliced.svg" light="/icons/slicel.svg" />
        </div>

        <div
          className="flex gap-x-[1rem] max-sm:gap-x-[0.5rem]"
          style={dropShadow}
        >
          <Icons dark="/icons/uniswapd.svg" light="/icons/uniswapl.svg" />
          <Icons dark="/icons/md.svg" light="/icons/ml.svg" />
          <Icons dark="/icons/2dd.svg" light="/icons/2dl.svg" />
          <Icons dark="/icons/pulsedogd.svg" light="/icons/pulsedogl.svg" />
          <Icons dark="/icons/manad.svg" light="/icons/manal.svg" />
          <Icons dark="/icons/trid.svg" light="/icons/tril.svg" />
        </div>
      </div>

      <div
        className="flex flex-col gap-y-[1rem] w-1/2 pl-[2rem]
            max-sm:w-full max-sm:pl-0"
      >
        <p
          className="text-[54px] font-[Infra] font-extrabold
                max-sm:text-[24px]"
          style={{ color: resolvedTheme === "dark" ? "#FFFFFF" : "#131219" }}
        >
          Explore DeFi protocols
        </p>

        <p
          className="font-[Infra] text-[24px] mt-2 font-normal leading-7
                max-sm:text-[16px] max-sm:leading-5 max-sm:mb-[24px]"
          style={{
            color: resolvedTheme === "dark" ? "#FFFFFF91" : "#13121991",
          }}
        >
          PulseGenesis allows you to securely connect to the best decentralized
          apps. Easily view NFTs, connect with, swap and farm on the hottest
          DeFi protocols
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
