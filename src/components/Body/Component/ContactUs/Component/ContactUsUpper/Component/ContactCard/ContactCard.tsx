import React from 'react'
import Image from 'next/image'
import { ContactCardLinesProps } from '@/types'

const ContactCard: React.FC<ContactCardLinesProps> = ({
    url,
    firstLine,
    secondLine,
    borderColor,
}) => {
    return (
        <div className="flex justify-center px-[15px]">
            <div className="flex flex-col items-center mb-[30px]">
                <div className="flex justify-center items-center w-[107px] h-[107px] mb-[10px] mx-auto border-[1px] border-[hsla(0,0%,100%,.07)] border-[hsla(0,0%,100%,.07)] rounded-full">
                    <div
                        className="flex justify-center rounded-full bg-[#0b1d33] items-center w-[83px] h-[83px] border-[3px]"
                        style={{ borderColor: `${borderColor}` }}
                    >
                        <Image
                            src={url || '/img/icon/email.png'}
                            alt="Contact Avatar"
                            className="rounded-full object-contain"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
                <div className="text-white text-[22px] font-bold leading-[30px]">
                    <p className="text-center">{firstLine}</p>
                    <p className="text-center">{secondLine}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
