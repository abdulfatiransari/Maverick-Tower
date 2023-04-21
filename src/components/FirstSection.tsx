import React, { useContext, useRef, useState } from 'react'
import { useTheme } from "next-themes";
import Image from 'next/image';
import FirstDark from '../../public/landingpage/first_section_dark.svg'
import FirstLight from '../../public/landingpage/first_section.svg'
import WalletIcon from '../../public/landingpage/wallet_icon.svg'
import PlayIcon from '../../public/landingpage/play_icon.svg'
import { useOnClickOutside } from "usehooks-ts";
import { Dialog } from "@headlessui/react";
import Router, { useRouter } from "next/router";
// import Typewriter from 'typewriter-effect';
import TypeWriter from './Typewritter';
import { ThemeContext } from './Layout';


type Props = {}

const FirstSection = (props: Props) => {
    const [resolvedTheme, setTheme] = useContext(ThemeContext);
    const ref = useRef(null);
    useOnClickOutside(ref, () => {
        setIsOpen(false);
    });
    const [isOpen, setIsOpen] = useState(false);

    const typeWriter = ["PulseChain", "Cross Chain", "Ethereum", "BNB Chain", " Arbitrum", "Syscoin"];

    const typewriterstyle = [
        "text-[54px] max-sm:text-[39px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FC0420] via-[#F10F83] via-[#C010EF] via-[#8000FF] to-[#00DBFF]",
        "text-[54px] max-sm:text-[39px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8000FF] to-[#00DBFF]",
        "text-[54px] max-sm:text-[39px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F75FF] to-[#9B3CE7]",
        "text-[54px] max-sm:text-[39px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E47106] to-[#F8A222]",  //bnbchain
        "text-[54px] max-sm:text-[39px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#289FEF] to-[#42557B]",
        "text-[54px] max-sm:text-[39px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1F5EFF] to-[#B4DFFF]"
    ];

    return (
        <div className="flex w-full items-center justify-between gap-x-[4rem]
        max-sm:max-w-[100vw] max-sm:overflow-hidden max-sm:flex max-sm:flex-col max-sm:gap-x-0 max-sm:flex-col-reverse max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]">
            <div className="flex flex-col gap-y-[1rem] w-1/2
            max-sm:w-full">
                <p className="text-[54px] leading-[64px] font-[Infra] font-extrabold opacity-100
                max-sm:text-[39px]">
                    Your <span className="text-[54px] opacity-100 font-[Infra] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FC0420] via-[#F10F83] via-[#C010EF] via-[#8000FF]   to-[#00DBFF]
                    max-sm:text-[39px]"
                    >
                        <TypeWriter data={typeWriter} style={typewriterstyle} />
                    </span>,<br />
                    Social DeFi  Wallet</p>

                <p className="opacity-80 text-[24px] font-normal max-sm:text-[16px]"
                    style={{ color: resolvedTheme === 'dark' ? '#FFFFFF' : '#131219' }}
                >Join the Web3, find the best DeFi protocols...</p>
                <div className="flex gap-x-[1.25rem]">
                    <button className="flex gap-x-[0.5rem] text-[#FFFFFF] items-center px-[1.5rem] py-[1rem] rounded-[0.5rem]
                    max-sm:text-[12px] max-sm:py-[0.688rem] max-sm:px-[1.063rem]"
                        onClick={() => window.open("https://investpowerlabs.com/projects/IlnWaevknj8hWd7j9Pit")}
                        style={{
                            background: 'linear-gradient(85.85deg, #4718AC 0%, #D718B8 100%)',
                            boxShadow: '0px 40px 16px rgba(0, 0, 0, 0.01), 0px 23px 14px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <Image
                            src={WalletIcon}
                            className='object-contain h-[20px] w-[18px] '
                            alt='WalletIcon'
                        />
                        Tokensale</button>

                    <Dialog
                        as='div'
                        className=''
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                    >
                        <div className='fixed inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-y-auto bg-gray-900 bg-opacity-60 '>
                            <div
                                ref={ref}
                                className='flex items-center justify-center bg-[#1C202C]  rounded-md '
                            >
                                <div className=' bg-[#1A1D27] rounded text-right z-20'>
                                    <button
                                        className='mx-3 my-1 font-bold text-white'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        X
                                    </button>
                                    <iframe
                                        width='860'
                                        height='515'
                                        src="https://www.youtube.com/embed/qNnO6d-yuYo"
                                        title='YouTube video player'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                    <button className="flex gap-x-[0.5rem] text-[#FFFFFF] items-center px-[1.5rem] py-[1rem] rounded-[0.5rem]
                    max-sm:text-[12px] max-sm:py-[0.688rem] max-sm:px-[1.063rem]"
                        onClick={() => setIsOpen(true)}
                        style={{
                            background: '#7747FF',
                            boxShadow: '0px 40px 16px rgba(0, 0, 0, 0.01), 0px 23px 14px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <Image
                            src={PlayIcon}
                            className='object-contain h-[20px] w-[18px] '
                            alt='WalletIcon'
                        />
                        See Demo</button>
                </div>
            </div>

            <div className="flex w-3/2 max-sm:w-full">
                <Image
                    src={FirstDark}
                    alt='FirstDark'
                    className='max-sm:w-full'
                />
            </div>
        </div>
    )
}

export default FirstSection