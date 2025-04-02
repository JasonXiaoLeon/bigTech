const BodyText = () => {
    return (
        <div className="w-[360px] md:w-[690px] lg:w-[770px] xl:w-[1011.66px] h-[126px] md:h-[123.118px] lg:h-[126px] xl:h-[154px] mb-[25px] md:mb-[30px] lg:mb-[40px] xl:mb-[45px]">
            <div className="flex justify-center">
                <div className="text-[30px] md:text-[44px] lg:text-[45px] xl:text-[55px] text-white text-center tracking-[0.01em] leading-[1.4] font-semibold">
                    <div className="block md:hidden">
                        <div>Join Future Of</div>
                        <div>
                            Algorithmic <span className="text-[#00c4f4]">Crypto</span>
                        </div>
                        <div>Trading Strategies</div>
                    </div>

                    <div className="hidden md:block lg:hidden w-[690px]">
                        <div>Join Future Of Algorithmic</div>
                        <div>
                            <span className="text-[#00c4f4]">Crypto</span> Trading Strategies
                        </div>
                    </div>

                    <div className="hidden lg:block w-[770px] xl:w-[1011.66px]">
                        <div>
                            Join Future Of Algorithmic
                            <span className="text-[#00c4f4]">&nbsp;Crypto</span>
                        </div>
                        <div> Trading Strategies</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyText
