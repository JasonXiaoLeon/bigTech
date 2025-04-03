import React from 'react'

interface props {
    size: string
    bgColor: string
}

const CubeBtn: React.FC<props> = ({ size, bgColor }) => {
    return (
        <div
            className={`flex justify-center items-center bg-[${bgColor}]`}
            style={{ width: size, height: size }}
        >
            <button>
                <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="24"
                >
                    <path
                        d="M176.512 376.224a64 64 0 0 1 109.248-45.248l226.208 226.272 226.272-226.272a64 64 0 1 1 90.496 90.496l-271.52 271.52a63.936 63.936 0 0 1-90.464 0l-271.488-271.52a63.68 63.68 0 0 1-18.752-45.248z"
                        fill="#ffffff"
                    />
                </svg>
            </button>
        </div>
    )
}

export default CubeBtn
