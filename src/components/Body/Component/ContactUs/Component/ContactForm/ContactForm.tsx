import NormalBtn from '@/components/Button/NormalBtn/NormalBtn'
import React from 'react'

const ContactForm = () => {
    return (
        <div className="px-[15px]">
            <div
                className="w-[360px] md:w-[690px] mx-auto lg:w-[930px] xl:w-[1220px]"
                style={{
                    backgroundImage: 'url(/img/contact_bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                }}
            >
                <div className="flex py-[35px] px-[20px] md:p-[60px] lg:p-[80px] w-[360px] md:w-[690px] lg:w-[930px] xl:w-[1220px]">
                    <form className="text-white">
                        <div className="flex flex-col justify-between md:flex-row text-[16px] font-[400]">
                            <input
                                className="w-[320px] h-[65px] md:w-[270px] md:h-[65px] lg:w-[370px] xl:w-[515px] mb-[30px] rounded-[5px] px-[18px] py-[20px] bg-[#0b1d33] border border-[hsla(0,0%,100%,0.06)] focus:outline-none"
                                placeholder="Enter your Name"
                            />
                            <input
                                className="w-[320px] h-[65px] md:w-[270px] md:h-[65px] lg:w-[370px] xl:w-[515px] mb-[30px] rounded-[5px] px-[18px] py-[20px] bg-[#0b1d33] border border-[hsla(0,0%,100%,0.06)] focus:outline-none"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <textarea
                            placeholder="Enter your message"
                            className="w-[320px] h-[184px] md:w-[570px] md:h-[184px] lg:w-[770px] 
                    xl:w-[1060px] mb-[30px] rounded-[5px] px-[18px] py-[20px] bg-[#0b1d33] border border-[hsla(0,0%,100%,0.06)] focus:outline-none"
                        />
                        <NormalBtn
                            value="Send Message"
                            widthType={0}
                            textHoverColor="#00c4f4"
                            fontWeight="700"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
