"use client"
import { useState, useEffect } from 'react'
import Timecomp from '../Timecomp/Timecomp'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimerCounter = () => {
  const [targetTime, setTargetTime] = useState<number | null>(null); // 初始化为 null

  useEffect(() => {
    const savedTime = localStorage.getItem('countdownTarget');
    
    if (savedTime) {
      setTargetTime(parseInt(savedTime)); // 从localStorage获取存储的目标时间
    } else {
      const newTargetTime = Date.now() + 2 * 60 * 60 * 1000;
      setTargetTime(newTargetTime); // 计算2小时后的目标时间
      localStorage.setItem('countdownTarget', newTargetTime.toString()); // 保存目标时间
    }
  }, []);

  const calculateTimeLeft = (): TimeLeft => {
    if (targetTime === null) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // 如果targetTime为null，返回0
    }
    const difference = targetTime - Date.now();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // 如果倒计时结束，返回0
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    if (targetTime === null) return; // 等待targetTime被初始化

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);

      if (Object.values(newTime).every(t => t <= 0)) {
        clearInterval(timer);
        localStorage.removeItem('countdownTarget');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className='flex justify-center w-screen h-[116px]'>
      <Timecomp value={timeLeft.days} text='Days' color='#00c4f4'/>
      <Timecomp value={timeLeft.hours} text='Hours' color='#ff9700'/>
      <Timecomp value={timeLeft.minutes} text='Minutes' color='#ff1d45'/>
      <Timecomp value={timeLeft.seconds} text='Seconds' color='#12d176'/>
    </div>
  )
}

export default TimerCounter;
