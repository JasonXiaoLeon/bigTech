import React from 'react'
import { useTranslations } from 'next-intl'
import GoalLabel from './Component/GoalLabel'

const Goal = () => {
    const t = useTranslations()

    const List = [
        { name: t('goal.preSell'), color: '#00c4f4' },
        { name: t('goal.softCap'), color: '#ff9700' },
        { name: t('goal.bonus'), color: '#12d176' },
    ]

    return (
        <div>
            <GoalLabel List={List} />
        </div>
    )
}

export default Goal
