import Image from "next/image";
import React, { useContext } from "react";
import { useTheme } from "next-themes";
import PulseIcon from "../../../public/landingpage/pulse_genisis_icon.svg";
import WalletIcon from "../../../public/landingpage/wallet_icon.svg";
import ModeIconDark from "../../../public/landingpage/mode_dark.svg";
import ModeIconLight from "../../../public/landingpage/mode_light.svg";
import MobileNavbar from "./MobileNavbar";
import { ThemeContext } from "../Layout";
import Logo from '../../../public/Icons/Mavericklogo.svg'

const Navbar = () => {

  const switchTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [resolvedTheme, setTheme] = useContext(ThemeContext);
  return (
    <>
      {/* <MobileNavbar /> */}
      <div className="flex items-center justify-between px-[120px] mt-[21px] max-sm:hidden">
        <div className="flex items-center">
          <Image
            src={Logo}
            className="object-contain h-[83px] w-[110px] "
            alt="logo"
          />
        </div>
        <div className="flex gap-x-[68px] items-center">
          <button className="flex text-[18px] text-[#000000] hover:text-[#00308F] hover:border-b hover:border-b-[#00308F] font-medium">Home</button>
          <button className="flex text-[18px] text-[#000000] hover:text-[#00308F] hover:border-b hover:border-b-[#00308F] font-medium">Our Services</button>
          <button className="flex text-[18px] text-[#000000] hover:text-[#00308F] hover:border-b hover:border-b-[#00308F] font-medium">Case Studies</button>
          <button className="flex text-[18px] text-[#000000] hover:text-[#00308F] hover:border-b hover:border-b-[#00308F] font-medium">Blog</button>
          <button className="flex text-[18px] text-[#000000] hover:text-[#00308F] hover:border-b hover:border-b-[#00308F] font-medium">Contact</button>
          <button
            className="flex items-center text-[#FFFFFF] text-[18px] gap-x-[0.5rem] rounded-[10px] px-[40px] py-[10px] font-[semibold] border-0 outline-0"
            style={{
              background: "#00308F",
            }}
          >
            {/* <Image
              src={WalletIcon}
              className="object-contain h-[20px] w-[18px] "
              alt="InvestDex"
            /> */}
            Schedule a call
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
