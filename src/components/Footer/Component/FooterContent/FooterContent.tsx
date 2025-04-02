import React from 'react'
import BigTechContact from './Component/BigTechContact/BigTechContact'
import FooterListBlock from './Component/FooterListBlock'
import Subscribe from './Component/Subscribe'

const FooterContent = () => {
    const listUsefulLinks = ['Contact us', 'How it Works', 'Create', 'Explore', 'Terms & Services']

    const listCommunity = ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters']

    return (
        <div className="mt-[55px] xl:mx-[-15px] mb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[305px_400px_240px] xl:grid-cols-[312.5px_312.5px_208.33px_416.66px] xl:h-[287.594px]">
            <BigTechContact />

            <div className="md:ml-[80px] lg:w-[320px]">
                <FooterListBlock title="Useful Links" value={listUsefulLinks} />
            </div>
            <div className="lg:w-[240px] xl:w-[208.33px]">
                <FooterListBlock title="Community" value={listCommunity} />
            </div>
            <div className="xl:ml-[75px] xl:mb-[30px] xl:px-[15px]">
                <Subscribe />
            </div>
        </div>
    )
}

export default FooterContent
