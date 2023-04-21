import React from 'react'
import Img from '../../public/Icons/Rectangle.svg'
import Arrow from '../../public/Icons/uparrow.svg'
import Flag from '../../public/Icons/flag.svg'
import Line from '../../public/Icons/line.svg'
import Image from 'next/image'

type Props = {}

export default function First({ }: Props) {
    return (
        <div>
            <div className='flex flex-col items-center justify-center px-[118px] pb-[120px] mt-[37px]'
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 70%, rgba(0,48,143,1) 30%)' }}
            >
                <div className='relative'>
                    <h2 className='text-[50px] font-bold font-[poppins] leading-[75px] text-center uppercase'>
                        Skyrocket Your Hotel Bookings with Our
                        Proven Marketing SYSTEMS - <span className='relative text-[#000000] opacity-100 text-[50px] font-bold font-[poppins] leading-[75px] text-center uppercase'>Get 50+
                            <Image
                                src={Line}
                                className="object-contain absolute right-[0px]"
                                alt="Img"
                            />
                        </span> Direct
                        Bookings in 90 Days!
                    </h2>
                    <Image
                        src={Arrow}
                        className="object-contain absolute left-[112px] bottom-[-25px]"
                        alt="Img"
                    />
                    <Image
                        src={Flag}
                        className="object-contain absolute right-[112px]"
                        alt="Img"
                    />
                </div>

                <div className='mt-[43px] mb-[27px]'>
                    <button
                        className="flex items-center text-[#FFFFFF] text-[18px] gap-x-[0.5rem] rounded-[10px] px-[40px] py-[10px] font-[semibold] border-0 outline-0"
                        style={{
                            background: "#00308F",
                        }}
                    >
                        Unlock my booking boost now
                    </button>
                </div>

                <div>
                    <Image
                        src={Img}
                        className="object-contain"
                        alt="Img"
                    />
                </div>
            </div>
        </div>
    )
}