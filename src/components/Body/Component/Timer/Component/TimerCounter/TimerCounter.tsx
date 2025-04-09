'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Timecomp from '../Timecomp/Timecomp'
import { TimeLeft } from '@/types'

const TimerCounter = () => {
    const t = useTranslations()
    const [targetTime, setTargetTime] = useState<number | null>(null)

    useEffect(() => {
        const savedTime = localStorage.getItem('countdownTarget')

        if (savedTime) {
            setTargetTime(parseInt(savedTime))
        } else {
            const newTargetTime = Date.now() + 2 * 60 * 60 * 1000
            setTargetTime(newTargetTime)
            localStorage.setItem('countdownTarget', newTargetTime.toString())
        }
    }, [])

    const calculateTimeLeft = (): TimeLeft => {
        if (targetTime === null) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
        const difference = targetTime - Date.now()

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        if (targetTime === null) return

        const timer = setInterval(() => {
            const newTime = calculateTimeLeft()
            setTimeLeft(newTime)

            if (Object.values(newTime).every((t) => t <= 0)) {
                clearInterval(timer)
                localStorage.removeItem('countdownTarget')
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [targetTime])

    return (
        <div className="grid grid-cols-2 md:flex">
            <Timecomp value={timeLeft.days} text={t('timerClock.days')} color="#00c4f4" />
            <Timecomp value={timeLeft.hours} text={t('timerClock.hours')} color="#ff9700" />
            <Timecomp value={timeLeft.minutes} text={t('timerClock.minutes')} color="#ff1d45" />
            <Timecomp value={timeLeft.seconds} text={t('timerClock.seconds')} color="#12d176" />
        </div>
    )
}

export default TimerCounter
