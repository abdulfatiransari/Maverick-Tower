import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import PulseIcon from '../../../public/landingpage/pulse_genisis_icon.svg';
import WalletIcon from '../../../public/landingpage/wallet_icon.svg'
import SocialHubicon from "../../../public/icons/socialhubicon.svg";
import * as React from "react"; import ModeIconDark from '../../../public/landingpage/mode_dark.svg';
import ModeIconLight from '../../../public/landingpage/mode_light.svg';
import { RxCross2 } from 'react-icons/rx';

import Logo from "src/assets/images/logo.png";
import LogoDark from "src/assets/images/logo-dark.png";
import { ThemeContext } from "../Layout";
// import Service from "./Service";

export interface IMobileNavbarProps { }

export default function MobileNavbar(props: IMobileNavbarProps) {
    const [mounted, setMounted] = React.useState(false);
    const [resolvedTheme, setTheme] = React.useContext(ThemeContext);
const theme = resolvedTheme;
    const [isMobile, setIsMobile] = React.useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <>
            <div className="hidden max-sm:flex max-sm:w-[100vw] items-center overflow-hidden px-[10px]"
                style={{ backgroundColor: resolvedTheme === 'dark' ? '#1F1E24' : '#F8F8F8' }}
            >
                <div className="h-10 w-full my-5 FlexRow justify-between min-gap-x-[10px]">
                    <div className=" FlexRow ">
                        <button onClick={() => setIsMobile(!isMobile)}>
                            <svg
                                width="20"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.39998 0.799805C0.951976 0.799805 0.599976 1.1518 0.599976 1.5998C0.599976 2.0318 0.951976 2.3998 1.39998 2.3998H20.6C21.032 2.3998 21.4 2.0318 21.4 1.5998C21.4 1.1518 21.032 0.799805 20.6 0.799805H1.39998ZM0.599976 7.9998C0.599976 7.5518 0.951976 7.1998 1.39998 7.1998H20.6C21.032 7.1998 21.4 7.5518 21.4 7.9998C21.4 8.4318 21.032 8.7998 20.6 8.7998H1.39998C0.951976 8.7998 0.599976 8.4318 0.599976 7.9998ZM0.599976 14.3998C0.599976 13.9518 0.951976 13.5998 1.39998 13.5998H20.6C21.032 13.5998 21.4 13.9518 21.4 14.3998C21.4 14.8318 21.032 15.1998 20.6 15.1998H1.39998C0.951976 15.1998 0.599976 14.8318 0.599976 14.3998Z"
                                    fill={theme === "dark" ? "#FFFFFF" : "#1F2127"}
                                />
                            </svg>
                        </button>
                        {isMobile && (
                            <div className="flex flex-col fixed top-0 left-0 h-[100vh] w-[100vw]  gap-4 py-6 px-[10%]"
                                aria-orientation='vertical'
                                style={{ backgroundColor: resolvedTheme === 'dark' ? '#1F1E24' : '#F8F8F8', zIndex: 1 }}
                            >
                                <div className="flex items-center ">
                                    <button onClick={() => setIsMobile(!isMobile)}
                                        className='flex absolute left-3 top-8'>
                                        <RxCross2 className="w-[24px] h-[24px]" />

                                    </button>

                                    <Link className="nav" href="/">
                                        <Image
                                            src={PulseIcon}
                                            className='object-contain h-[32px] w-[32px] '
                                            alt='InvestDex'
                                        />
                                    </Link>
                                    <p className="text-[14px] font-extrabold ml-[5px]"
                                        style={{ color: resolvedTheme === 'dark' ? '#FFFFFF' : '#000000' }}
                                    >PulseGenesis</p>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <p>FAQ</p>
                                    <p>Twitter </p>
                                    <p>About</p>
                                    <p>Litepaper </p>
                                    <p>Gitlab</p>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center ml-[7px]">
                            <Link className="nav" href="/">
                                <Image
                                    src={PulseIcon}
                                    className='object-contain h-[32px] w-[32px] '
                                    alt='InvestDex'
                                />
                            </Link>
                            <p className="text-[14px] font-extrabold ml-[5px]"
                                style={{ color: resolvedTheme === 'dark' ? '#FFFFFF' : '#000000' }}
                            >PulseGenesis</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <div className="bg-[#7747FF] rounded-[8px] p-[7px]"
                            style={{ boxShadow: '0px 40px 16px rgba(0, 0, 0, 0.01), 0px 23px 14px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}
                        ><Image
                                src={WalletIcon}
                                className='object-contain h-[16px] w-[16px] '
                                alt='WalletIcon'
                            /></div>

                        <div className="bg-gradient-to-r from-[#AF427E] to-[#5D62E8] p-[1px] rounded-[50px]">
                            <div className="flex rounded-[50px] text-[12px] p-[8px]"
                                style={{
                                    color: resolvedTheme === 'dark' ? '#FFFFFF' : '#000000',
                                    backgroundColor: resolvedTheme === 'dark' ? '#1F1E24' : '#F8F8F8'
                                }}
                            ><Image src={SocialHubicon} className="" alt="icon" />Web3 Social Hub</div>
                        </div>

                        <div onClick={switchTheme}>
                            {resolvedTheme === "dark" ? (
                                <Image
                                    src={ModeIconDark}
                                    alt='ModeIconDark'
                                    className='w-[24px] h-[24px]'
                                />
                            ) : (
                                <>
                                    <Image
                                        src={ModeIconLight}
                                        alt='ModeIconLight'
                                        className='w-[24px] h-[24px]'
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
