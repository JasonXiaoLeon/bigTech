import React from 'react'

const ContactForm = () => {
  return (
    <div
      className='px-[15px] h-[390px] md:w-[690px] md:h-[690px] mx-auto lg:w-[930px] lg:h-[532px] xl:w-[1220px]'
      style={{
        backgroundImage: 'url(/img/contact_bg.png)', // 替换成你的背景图路径
        backgroundSize: 'cover', // 背景图覆盖整个容器
        backgroundPosition: 'center', // 背景图居中显示
        backgroundRepeat: 'no-repeat', // 防止背景图重复
        height:"100%",
      }}
    >
        <div className='flex  py-[35px] px-[20px] md:p-[60px] lg:p-[80px] w-[360px] md:w-[690px] md:h-[495px] lg:w-[532px] lg:h-[572px] xl:w-[1060px]'>
            <form>
                <div className='flex flex-col justify-between md:flex-row'>
                    <input className='w-[320px] h-[65px] md:w-[270px] md:h-[65px] lg:w-[370px] xl:w-[515px] mb-[30px] rounded-[5px] px-[18px] py-[20px] bg-[#0b1d33] text-[18px] border border-[#6c757d] border-opacity-7 ' placeholder='Enter your Name'/>
                    <input className='w-[320px] h-[65px] md:w-[270px] md:h-[65px] lg:w-[370px] xl:w-[515px]  mb-[30px] rounded-[5px] px-[18px] py-[20px] bg-[#0b1d33] text-[18px] border border-[#6c757d] border-opacity-7 ' placeholder='Enter your Email'/>
                </div>
                <textarea
                    placeholder="Enter your message"
                    className='w-[320px] h-[184px] md:w-[570px] md:h-[184px] lg:w-[770px] xl:w-[1060px] mb-[30px] rounded-[5px] px-[18px] py-[20px] bg-[#0b1d33] text-[18px] border border-[#6c757d] border-opacity-7 '
                />
                <div className='flex justify-center items-center'>
                    <button className='flex justify-center items-center rounded-[70px] text-white uppercase w-[179.48px] h-[55px] bg-[#0b1d33] shadow-lg border-2 border-[#00c4f4]'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
