import { useTheme } from "next-themes";
import Image from "next/image";
import PulseIcon from "../../../public/landingpage/pulse_genisis_icon.svg";
import Telegraml from "../../../public/icons/telegramll.svg";
import Youtubel from "../../../public/icons/youtubell.svg";
import Twitterl from "../../../public/icons/tweeterll.svg";
import Telegramd from "../../../public/icons/telegramdd.svg";
import Youtubed from "../../../public/icons/youtubedd.svg";
import Twitterd from "../../../public/icons/tweeterdd.svg";
import { RiSendPlaneFill } from "react-icons/ri";
import { useContext } from "react";
import { ThemeContext } from "../Layout";

export interface IFooterProps {}

export default function Footer(props: any) {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);

  const bgColor = {
    backgroundColor: resolvedTheme === "dark" ? "#24222D" : "#F9F9F9",
  };
  const textColor = { color: resolvedTheme === "dark" ? "#909094" : "#686C79" };
  const inputTextColor = {
    backgroundColor: resolvedTheme === "dark" ? "#131219" : "#DADADA",
  };

  return (
    <div
      className="flex justify-between w-full  items-center px-[109px] py-[2.813rem]
    max-sm:px-[20px] max-sm:flex-col"
      style={bgColor}
    >
      <div className="flex flex-col w-1/3 max-sm:w-full">
        <div className="flex items-center gap-x-[0.5rem]">
          <Image
            src={PulseIcon}
            className="object-contain h-[50px] w-[50px] "
            alt="InvestDex"
          />
          <h1 className="text-[1.375rem]">PulseGenesis</h1>
        </div>

        <div className="flex flex-col w-[80%] gap-y-[0.5rem] mt-[0.5rem] relative">
          <p className="text-[1rem]">Subscribe to our newsletter.</p>
          <RiSendPlaneFill className="absolute right-[7px] bottom-[8px] bg-[#FFFFFF] text-[#000000] p-1 w-[25px] h-[25px] rounded-[4px]" />
          <input
            placeholder="Enter your Email address..."
            className="rounded-[6px] px-4 py-2 border border-[#bbbfca33]"
            style={inputTextColor}
          />
        </div>

        <p
          className="italic text-[0.75rem] leading-3 mt-[1.5rem]"
          style={textColor}
        >
          Disclaimer — The contents on this site are for informational and
          entertainment purposes only and do not constitute financial,
          accounting, or legal advice. All investments are done at your own
          risk. DYOR.
        </p>

        <p
          className="text-[18px] font-medium mt-[1.5rem] max-sm:text-[16px]"
          style={textColor}
        >
          Copyright ® 2022. All Rights Reserved
        </p>
      </div>

      {/* <div className="flex gap-x-[1rem] items-center max-sm:mt-[20px] max-sm:self-start">
        {resolvedTheme === "dark" ? (
          <Image
            src={Telegramd}
            className="h-[54px] w-[54px] max-sm:h-[36px] max-sm:w-[36px] "
            alt="Telegram"
          />
        ) : (
          <Image
            src={Telegraml}
            className="h-[54px] w-[54px] max-sm:h-[36px] max-sm:w-[36px] "
            alt="Telegram"
          />
        )}
        {resolvedTheme === "dark" ? (
          <Image
            src={Youtubed}
            className="h-[54px] w-[54px] max-sm:h-[36px] max-sm:w-[36px] "
            alt="Youtube"
          />
        ) : (
          <Image
            src={Youtubel}
            className="h-[54px] w-[54px] max-sm:h-[36px] max-sm:w-[36px] "
            alt="Youtube"
          />
        )}
        {resolvedTheme === "dark" ? (
          <Image
            src={Twitterd}
            className="h-[54px] w-[54px] max-sm:h-[36px] max-sm:w-[36px] "
            alt="Twitter"
          />
        ) : (
          <Image
            src={Twitterl}
            className="h-[54px] w-[54px] max-sm:h-[36px] max-sm:w-[36px] "
            alt="Twitter"
          />
        )}
      </div> */}
    </div>
  );
}
