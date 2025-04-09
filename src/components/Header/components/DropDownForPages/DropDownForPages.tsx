import React from 'react'
import { ContentListProp } from '@/types'

const DropDownForPages: React.FC<ContentListProp> = ({ contentList }) => {
    return (
        <div className="absolute left-[90px] w-[230px] py-[18px] bg-[#0b1d33]">
            <ul className="flex flex-col">
                {contentList.map((item, index) => (
                    <li key={index}>
                        <a
                            href={`#$`}
                            className="block text-white hover:text-[#00c4f4] py-[9px] pl-[25px] pr-[15px]"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DropDownForPages
