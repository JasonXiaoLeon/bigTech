import React from 'react'
import { useTranslation } from 'react-i18next'
import GoalLabel from './Component/GoalLabel'

const Goal = () => {
    const { t } = useTranslation()

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
