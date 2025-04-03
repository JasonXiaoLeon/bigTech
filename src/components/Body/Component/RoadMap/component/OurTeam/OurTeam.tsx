import React from 'react'
import RoadMapUpperPart from '../RoadMapUpperPart'
import Teammember from './Component/Teammember'

const teamMembers = [
    { imgUrl: '/img/team1.png', name: 'Cameron Williamson', jobTitle: 'Founder & CO' },
    { imgUrl: '/img/team2.png', name: 'Eleanor Pena', jobTitle: 'Head of Design' },
    { imgUrl: '/img/team3.png', name: 'Bessie Cooper', jobTitle: 'Vp People' },
    { imgUrl: '/img/team4.png', name: 'Darlene Robertson', jobTitle: 'Product Manager' },
    { imgUrl: '/img/team5.png', name: 'Jacob Jones', jobTitle: 'Marketer' },
    { imgUrl: '/img/team6.png', name: 'Courtney Henry', jobTitle: 'Founder' },
    { imgUrl: '/img/team7.png', name: 'Ronald Richards', jobTitle: 'Account Manager' },
    { imgUrl: '/img/team8.png', name: 'Theresa Webb', jobTitle: 'Founder & CO' },
]

const OurTeam = () => {
    return (
        <div className="pt-[130px]">
            <RoadMapUpperPart
                title={'Our team'}
                content1={'The Leadership'}
                blueContent={'Team'}
                marginBottom={'70px'}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-screen md:w-[720px] lg:w-[960px] xl:w-[1250px] mx-auto">
                {teamMembers.map((member, index) => (
                    <Teammember
                        key={index}
                        imgUrl={member.imgUrl}
                        name={member.name}
                        jobTitle={member.jobTitle}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurTeam
