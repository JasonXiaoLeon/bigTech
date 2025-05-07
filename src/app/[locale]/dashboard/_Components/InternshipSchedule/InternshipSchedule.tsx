"use client"
import React, { useState } from 'react'
import Attendance from '../Attendance/Attendance'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const hours = Array.from({ length: 10 }, (_, i) => `${9 + i}:00`)

const formatDate = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`
}

const getStartOfWeek = (date: Date) => {
  const day = date.getDay() || 7
  const start = new Date(date)
  start.setDate(date.getDate() - day + 1)
  start.setHours(0, 0, 0, 0)
  return start
}

const InternshipSchedule = () => {
  const [weekOffset, setWeekOffset] = useState(0)

  const today = new Date()
  const currentMonday = getStartOfWeek(today)
  currentMonday.setDate(currentMonday.getDate() + weekOffset * 7)

  const currentSunday = new Date(currentMonday)
  currentSunday.setDate(currentMonday.getDate() + 6)

  return (
    <div className="p-4 flex">
      <div>
        {/* 控制区 */}
        <div className="flex justify-between items-center mb-4 gap-2">
          <button
            onClick={() => setWeekOffset((prev) => Math.max(prev - 1, 0))}
            className={`px-3 py-1 rounded transition ${
              weekOffset === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            disabled={weekOffset === 0}
          >
            ⬅ Previous
          </button>

          <div className="text-center">
            <h2 className="text-lg font-semibold">Week {weekOffset + 1}</h2>
            <p className="text-sm text-gray-600">
              {formatDate(currentMonday)} - {formatDate(currentSunday)}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setWeekOffset((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
            >
              Next ➡
            </button>
            <button
              onClick={() => setWeekOffset(0)}
              className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded transition"
            >
              🔄 Today
            </button>
          </div>
        </div>

        {/* 表格 */}
        <div className="overflow-x-auto mb-6">
          <div className="grid grid-cols-8 border border-gray-300">
            {/* 顶部时间栏 */}
            <div className="bg-gray-100 p-2 border-r border-b border-gray-300 text-center font-semibold">Time</div>
            {days.map((day, idx) => {
              const dayDate = new Date(currentMonday)
              dayDate.setDate(currentMonday.getDate() + idx)
              const isToday = dayDate.toDateString() === new Date().toDateString()

              return (
                <div
                  key={day}
                  className={`p-2 border-r border-b border-gray-300 text-center font-semibold ${
                    isToday ? 'bg-yellow-200' : 'bg-gray-100'
                  }`}
                >
                  {day}
                  <div className="text-xs text-gray-500">{formatDate(dayDate)}</div>
                </div>
              )
            })}

            {/* 时间 + 内容格 */}
            {hours.map((hour) => (
              <React.Fragment key={hour}>
                <div className="p-2 border-t border-r border-b border-gray-300 text-center font-medium bg-gray-50">
                  {hour}
                </div>
                {days.map((day, idx) => {
                  const dayDate = new Date(currentMonday)
                  dayDate.setDate(currentMonday.getDate() + idx)
                  const isToday = dayDate.toDateString() === new Date().toDateString()

                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`h-16 border-t border-r border-b border-gray-200 transition ${
                        isToday ? 'bg-yellow-100' : 'hover:bg-blue-50'
                      }`}
                    />
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧出勤组件 */}
      <Attendance startDate={currentMonday} endDate={currentSunday} />
    </div>
  )
}

export default InternshipSchedule
