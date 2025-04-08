import React from 'react'
import { useTranslations } from 'next-intl'
import RoadMapUpperPart from '../RoadMapUpperPart'
import Teammember from './Component/Teammember'

const teamMembers = [
    { imgUrl: '/img/team1.png', name: 'Cameron Williamson', jobTitleKey: 'Founder & CO' },
    { imgUrl: '/img/team2.png', name: 'Eleanor Pena', jobTitleKey: 'Head of Design' },
    { imgUrl: '/img/team3.png', name: 'Bessie Cooper', jobTitleKey: 'Vp People' },
    { imgUrl: '/img/team4.png', name: 'Darlene Robertson', jobTitleKey: 'Product Manager' },
    { imgUrl: '/img/team5.png', name: 'Jacob Jones', jobTitleKey: 'Marketer' },
    { imgUrl: '/img/team6.png', name: 'Courtney Henry', jobTitleKey: 'Founder' },
    { imgUrl: '/img/team7.png', name: 'Ronald Richards', jobTitleKey: 'Account Manager' },
    { imgUrl: '/img/team8.png', name: 'Theresa Webb', jobTitleKey: 'Founder & CO' },
]

const OurTeam = () => {
    const t = useTranslations()

    return (
        <div className="pt-[130px]">
            <RoadMapUpperPart
                title={t('ourTeam.title')}
                content1={t('ourTeam.content1')}
                blueContent={t('ourTeam.blueContent')}
                marginBottom={'60px'}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-screen mt-[10px] md:w-[720px] lg:w-[960px] xl:w-[1250px] mx-auto">
                {teamMembers.map((member, index) => (
                    <Teammember
                        key={index}
                        imgUrl={member.imgUrl}
                        name={member.name}
                        jobTitle={t(
                            `ourTeam.jobTitles.${member.jobTitleKey.replace(/ & /g, '_').replace(/ /g, '_')}`
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurTeam
