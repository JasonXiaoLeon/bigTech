import React from 'react'

const delays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']

const Loading = () => {
    return (
        <div className="flex justify-center items-center bg-[#030b15] w-screen h-screen z-[100]">
            {delays.map((delay, index) => (
                <div
                    key={index}
                    className="bg-[#00c2f2] w-[6px] h-[40px] animate-[stretchdelay_1.2s_ease-in-out_infinite_both]"
                    style={{
                        animationDelay: delay,
                    }}
                />
            ))}
        </div>
    )
}

export default Loading
