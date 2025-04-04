import React from 'react'

interface Props {
    value: string
    url: string
}

const TermBtn: React.FC<Props> = ({ value, url }) => {
    return (
        <div className="px-[20px] xl:px-[30px] text-[15px] font-[500] text-[#a4b4c3] leading-[1.867]">
            <a href={url} className="hover:text-white">
                <button>{value}</button>
            </a>
        </div>
    )
}

export default TermBtn
