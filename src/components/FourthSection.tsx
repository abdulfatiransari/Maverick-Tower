import { useTheme } from "next-themes";
import Image from 'next/image';
import FourthLight from '../../public/landingpage/fourth_section.svg';
import FourthDark from '../../public/landingpage/fourth_section_dark.svg';
import { useContext } from "react";
import { ThemeContext } from "./Layout";


type Props = {}

const FourthSection = (props: Props) => {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);

    return (
        <div className="flex w-full items-center justify-between 
        max-sm:max-w-[100vw] max-sm:flex-col-reverse max-sm:items-start max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]">

            <div className="flex flex-col w-1/2 max-sm:w-full max-sm:w-full max-sm:mt-[23px]">
                {resolvedTheme === "dark" ? (
                    <Image
                        src={FourthDark}
                        alt='FourthDark'
                        className='rounded-[30px] max-sm:w-[100%]'
                    />
                ) : (
                    <>
                        <Image
                            src={FourthLight}
                            alt='FourthLight'
                            className='rounded-[30px] max-sm:w-[100%]'
                        />
                    </>
                )}
            </div>

            <div className="flex flex-col w-1/2 pl-[2rem] max-sm:w-full max-sm:pl-0 ">
                <p className="text-[47px] font-[Infra]  font-extrabold leading-[57px]
                max-sm:text-[24px] max-sm:leading-[30px]"
                    style={{ color: resolvedTheme === 'dark' ? '#FFFFFF' : '#131219' }}
                    >
                Explore our Web3 Social Hub. Follow other wallets...</p>
                <p className="font-[Infra] text-[24px] mt-2 leading-7 pr-[0.5rem]"
                    style={{ color: resolvedTheme === 'dark' ? '#FFFFFF91' : '#13121991' }}
                >Hexicans, Pulsicans, PuleXicans and Investdexers. Follow any wallet address, ENS handle or NFT collection to stay on top of the latest trends and tokens</p>
            </div>
        </div>
    )
}

export default FourthSection