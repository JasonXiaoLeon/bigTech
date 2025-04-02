import React from 'react'

interface Props {
    url: string
    height: string
    width?: string
}

const SocialMeidaIcon: React.FC<Props> = ({ url, height, width }) => {
    return (
        <div className="px-[10px]">
            <img src={url} alt="social-media-icon" style={{ height, width }} className="w-auto" />
        </div>
    )
}

export default SocialMeidaIcon
