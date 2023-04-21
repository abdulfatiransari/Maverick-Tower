import { useTheme } from "next-themes";
import Image from "next/image";
import ThirdLight from "../../public/landingpage/third_section.svg";
import ThirdDark from "../../public/landingpage/third_section_dark.svg";
import Third from "../../public/landingpage/thirdsectionimg.png";
import ThirdIcon from "../../public/landingpage/third_section_icon.svg";
import ThirdIcon1 from "../../public/landingpage/third_section_icon1.svg";
import ThirdIcond from "../../public/landingpage/third_section_icon_dark.svg";
import ThirdIcon1d from "../../public/landingpage/third_section_icon1_dark.svg";
import Icons from "./Icons";
import { useContext } from "react";
import { ThemeContext } from "./Layout";

type Props = {};

const ThirdSection = (props: Props) => {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);
  const dropShadow = {
    filter:
      "drop-shadow(0px 128px 51px rgba(0, 0, 0, 0.01)) drop-shadow(0px 72px 43px rgba(0, 0, 0, 0.05)) drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.09)) drop-shadow(0px 8px 18px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1))",
  };

  return (
    <div
      className="flex w-full items-center justify-between 
        max-sm:max-w-[100vw] max-sm:flex-col max-sm:items-start max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]"
    >
      <div className="flex flex-col gap-y-[1rem] w-1/2 max-sm:w-full">
        <p
          className="text-[54px] font-[Infra] leading-[64px] font-extrabold
                max-sm:text-[24px]"
          style={{ color: resolvedTheme === "dark" ? "#FFFFFF" : "#131219" }}
        >
          Track DeFi Portfolios
        </p>

        <p
          className="text-[24px] font-[Infra] font-normal mt-1 leading-7"
          style={{
            color: resolvedTheme === "dark" ? "#FFFFFF91" : "#13121991",
          }}
        >
          Your keys, your cypto. View all your investments in a single dashboard
        </p>

        <p
          className="text-[24px] font-[Infra] font-normal mt-4
                max-sm:text-[16px] max-sm:mt-0"
          style={{
            color: resolvedTheme === "dark" ? "#FFFFFFcc" : "#131219cc",
          }}
        >
          Supported chains
        </p>

        <div
          className="flex gap-x-[1rem] max-sm:gap-x-[0.5rem]"
          style={dropShadow}
        >
          <Icons dark="/icons/pulsed.svg" light="/icons/pulsel.svg" />
          <Icons dark="/icons/ethd.svg" light="/icons/ethl.svg" />
          <Icons dark="/icons/networkd.svg" light="/icons/networkl.svg" />
          <Icons dark="/icons/arbitrumd.svg" light="/icons/arbitruml.svg" />
          <Icons dark="/icons/sd.svg" light="/icons/sl.svg" />
        </div>

        <p
          className="text-[24px] font-[Infra] font-normal mt-3
                max-sm:text-[16px] max-sm:mt-0"
          style={{
            color: resolvedTheme === "dark" ? "#FFFFFFcc" : "#131219cc",
          }}
        >
          Some of supported protocols
        </p>

        <div
          className="flex gap-x-[1rem] max-sm:gap-x-[0.5rem]"
          style={dropShadow}
        >
          <Icons dark="/icons/hexad.svg" light="/icons/hexal.svg" />
          <Icons dark="/icons/2dd.svg" light="/icons/2dl.svg" />
          <Icons dark="/icons/pulsexd.svg" light="/icons/pulsexl.svg" />
          <Icons dark="/icons/cubewd.svg" light="/icons/cubewl.svg" />
          <Icons dark="/icons/md.svg" light="/icons/ml.svg" />
          <Icons dark="/icons/ringd.svg" light="/icons/ringl.svg" />
        </div>
      </div>

      <div className="flex max-sm:mt-[32px]">
        {resolvedTheme === "dark" ? (
          <Image src={Third} alt="Third" className="" />
        ) : (
          <>
            <Image src={Third} alt="Third" className="" />
          </>
        )}
      </div>
    </div>
  );
};

export default ThirdSection;
