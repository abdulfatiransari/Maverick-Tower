import { useTheme } from "next-themes";
import Image from 'next/image';
import FifthLight from '../../public/landingpage/fifth_section.svg';
import FifthDark from '../../public/landingpage/fifth_section_dark.svg';
import { useContext } from "react";
import { ThemeContext } from "./Layout";


type Props = {}

const FifthSection = (props: Props) => {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);

    return (
        <div className="flex w-full items-center justify-between 
        max-sm:max-w-[100vw] max-sm:flex-col-reverse max-sm:items-start max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]">

            <div className="flex flex-col w-1/2 max-sm:w-full">
                {resolvedTheme === "dark" ? (
                    <Image
                        src={FifthDark}
                        alt='FifthDark'
                        className='rounded-[20px] max-sm:w-[100%]'
                    />
                ) : (
                    <>
                        <Image
                            src={FifthLight}
                            alt='FifthLight'
                            className='rounded-[20px] max-sm:w-[100%]'
                        />
                    </>
                )}
            </div>

            <div className="flex flex-col gap-y-[1rem] w-1/2 pl-[2rem] max-sm:w-full max-sm:pl-0">
                <p className="text-[44px] font-[Infra] font-extrabold
                max-sm:text-[24px]"
                    style={{ color: resolvedTheme === 'dark' ? '#FFFFFF' : '#131219' }}
                    >
                Find the best swap prices </p>

                <p className="text-[24px] font-[Infra] leading-7"
                    style={{ color: resolvedTheme === 'dark' ? '#FFFFFF91' : '#13121991' }}
                >Swap across multiple chains, including Pulsechain, Ethereum, BSC and more.</p>
            </div>
        </div>
    )
}

export default FifthSection