import React, { useContext, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Image from "next/image";
import { Transform } from "stream";
import { ThemeContext } from "./Layout";

type Props = {};

function Roadmap({}: Props) {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [resolvedTheme, setTheme] = useContext(ThemeContext);

  const textColor = {
    color: resolvedTheme === "dark" ? "#D9D9D9" : "#6A6A6A",
  };
  const borderColor = {
    borderColor: resolvedTheme === "dark" ? "white" : "black",
  };

  return (
    <div
      className="flex flex-col w-full justify-center 
        max-sm:max-w-[100vw] max-sm:overflow-x-scroll max-sm:overflow-y-hidden max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]"
    >
      <h1
        className="text-[64px] font-extrabold mb-[43px]
            max-sm:text-[24px] max-sm:sticky max-sm:left-[0px]
            "
      >
        Roadmap
      </h1>
      <div className="flex gap-x-[1rem] md:h-[200px] ">
        <div className="flex flex-col min-w-[230px]">
          <div className="flex justify-between items-center mb-[1rem]">
            <p className="bg-[#7747FF] font-bold text-[20px] text-[#FFFFFF] rounded-[50px] px-[16px] py-[4px]">
              Phase 1
            </p>
            <div onClick={() => setOpen1(!open1)}>
              {resolvedTheme === "dark" ? (
                open1 ? (
                  <Image
                    src={"/icons/uparrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Image
                    src={"/icons/downarrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                )
              ) : open1 ? (
                <Image
                  src={"/icons/uparrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              ) : (
                <Image
                  src={"/icons/downarrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              )}
            </div>
          </div>
          {open1 && (
            <div>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#80FF77" /> Product R&D
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#80FF77" />
                Buy.com (PulseGenesis.com)
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#80FF77" />
                Assign Developers
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-[230px]">
          <div className="flex justify-between items-center mb-[1rem]">
            <p className="bg-[#7747FF] font-bold text-[20px] text-[#FFFFFF] rounded-[50px] px-[16px] py-[4px]">
              Phase 2
            </p>
            <div onClick={() => setOpen2(!open2)}>
              {resolvedTheme === "dark" ? (
                open2 ? (
                  <Image
                    src={"/icons/downarrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Image
                    src={"/icons/uparrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                )
              ) : open2 ? (
                <Image
                  src={"/icons/downarrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              ) : (
                <Image
                  src={"/icons/uparrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              )}
            </div>
          </div>
          {open2 && (
            <div>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#80FF77" />
                Product wireframes
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#80FF77" />
                Product UI design
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#80FF77" />
                Promo script and video
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-[230px]">
          <div className="flex justify-between items-center mb-[1rem]">
            <p
              className="font-bold text-[20px] rounded-[50px] px-[16px] py-[4px] border"
              style={borderColor}
            >
              Phase 3
            </p>
            <div onClick={() => setOpen3(!open3)}>
              {resolvedTheme === "dark" ? (
                open3 ? (
                  <Image
                    src={"/icons/uparrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Image
                    src={"/icons/downarrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                )
              ) : open3 ? (
                <Image
                  src={"/icons/uparrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              ) : (
                <Image
                  src={"/icons/downarrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              )}
            </div>
          </div>
          {open3 && (
            <div className="">
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Tokenomics
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Finalise Promo video
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Hire Business analyst
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                App design
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-[230px]">
          <div className="flex justify-between items-center mb-[1rem]">
            <p
              className="font-bold text-[20px] rounded-[50px] px-[16px] py-[4px] border"
              style={borderColor}
            >
              Phase 4
            </p>
            <div onClick={() => setOpen4(!open4)}>
              {resolvedTheme === "dark" ? (
                open4 ? (
                  <Image
                    src={"/icons/uparrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Image
                    src={"/icons/downarrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                )
              ) : open4 ? (
                <Image
                  src={"/icons/uparrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              ) : (
                <Image
                  src={"/icons/downarrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              )}
            </div>
          </div>
          {open4 && (
            <div className="">
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Pulsechain Testnet
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Whitepaper
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Big Reveal
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-[230px]">
          <div className="flex justify-between items-center mb-[1rem]">
            <p
              className="font-bold text-[20px] rounded-[50px] px-[16px] py-[4px] border"
              style={borderColor}
            >
              Phase 5
            </p>
            <div onClick={() => setOpen5(!open5)}>
              {resolvedTheme === "dark" ? (
                open5 ? (
                  <Image
                    src={"/icons/uparrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Image
                    src={"/icons/downarrowd.svg"}
                    alt="icon"
                    className="w-[36px] h-[36px]"
                    width={36}
                    height={36}
                  />
                )
              ) : open5 ? (
                <Image
                  src={"/icons/uparrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              ) : (
                <Image
                  src={"/icons/downarrowl.svg"}
                  alt="icon"
                  className="w-[36px] h-[36px]"
                  width={36}
                  height={36}
                />
              )}
            </div>
          </div>
          {open5 && (
            <div className="">
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Open Beta testing
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Tech spec.
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Influencer partners
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Select launchpad
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                Marketing campaign
              </p>
              <p className="flex gap-x-[0.5rem] text-[1rem]" style={textColor}>
                <BsCheckCircleFill color="#696a774a" />
                AMA
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
