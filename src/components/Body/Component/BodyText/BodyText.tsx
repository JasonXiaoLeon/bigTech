const BodyText = () => {
    return (
        <div className="w-full max-w-[1011.66px] h-auto mb-[25px] md:mb-[30px] lg:mb-[40px] xl:mb-[45px] mx-auto">
            <div className="text-center">
                <h1 className="text-[clamp(30px,5vw,55px)] text-white tracking-[0.01em] leading-[1.4] font-[600]">
                    <div className="block md:hidden text-[30px]">
                        Join Future Of
                        <br />
                        Algorithmic <span className="text-[#00c4f4]">Crypto</span>
                        <br />
                        Trading Strategies
                    </div>

                    <div className="hidden md:block lg:hidden md:text-[44px]">
                        Join Future Of Algorithmic
                        <br />
                        <span className="text-[#00c4f4]">Crypto</span> Trading Strategies
                    </div>

                    <div className="hidden lg:block lg:text-[45px] xl:text-[55px]">
                        Join Future Of Algorithmic
                        <span className="text-[#00c4f4]">&nbsp;Crypto</span>
                        <br />
                        Trading Strategies
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default BodyText
