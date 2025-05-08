"use client"
import React, { useState, useEffect } from 'react'

interface InternshipScheduleProps {
  email: string | undefined
}

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

const InternshipSchedule: React.FC<InternshipScheduleProps> = ({ email }) => {
  const name = email?.split('@')[0] || 'unknown'

  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [canSubmit, setCanSubmit] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isFull, setIsFull] = useState(false)
  const [permissionLevel, setPermissionLevel] = useState<number | null>(null)
  const [attendanceData, setAttendanceData] = useState<any[]>([])

  const today = new Date()
  const currentMonday = getStartOfWeek(today)
  currentMonday.setDate(currentMonday.getDate() + weekOffset * 7)
  const currentSunday = new Date(currentMonday)
  currentSunday.setDate(currentMonday.getDate() + 6)

  const handleDayClick = (day: string) => {
    if (!isEditing) return
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day))
    } else {
      if (selectedDays.length < 4) {
        setSelectedDays([...selectedDays, day])
      }
    }
  }

  useEffect(() => {
    setCanSubmit(selectedDays.length >= 3 && selectedDays.length <= 4)
  }, [selectedDays])

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch('/api/auth/user/attendance', {
          method: 'GET',
        })
        const data = await response.json()
        setPermissionLevel(data.permissionLevel)
        setAttendanceData(data.attendance || [])
      } catch (error) {
        console.error('Error fetching attendance:', error)
      }
    }

    fetchAttendance()
  }, [])

  const checkFull = async (): Promise<boolean> => {
    const currentWeek = attendanceData.filter((attendance: any) => {
      const attendanceDate = new Date(attendance.date)
      return attendanceDate >= currentMonday && attendanceDate <= currentSunday
    })

    const uniqueUsers = new Set(currentWeek.map((att: any) => att.name))
    return uniqueUsers.size >= 4
  }

  const handleSubmit = async () => {
    const full = await checkFull()
    if (full) {
      alert('The schedule is already full for this week.')
      setIsFull(true)
      return
    }

    try {
      const response = await fetch('/api/auth/user/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, selectedDays }),
      })

      if (response.ok) {
        alert('Your appointment has been submitted')
        setIsEditing(false)
      } else {
        alert('Failed to submit the appointment')
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
      alert('Failed to submit the appointment')
    }
  }

  const handleEditClick = async () => {
    const full = await checkFull()
    if (full) {
      alert('The schedule is already full for this week.')
      setIsFull(true)
    } else {
      setIsEditing(true)
    }
  }

  if (permissionLevel === null) return null
  if (permissionLevel > 7) return <div></div>

  return (
    <div className="p-4 flex">
      <div>
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

        <div className="overflow-x-auto mb-6 mt-6">
          <div className="grid grid-cols-6 border border-gray-300">
            <div className="bg-gray-100 p-2 border-r border-b border-gray-300 text-center font-semibold">Time</div>
            {days.slice(0, 5).map((day, idx) => {
              const dayDate = new Date(currentMonday)
              dayDate.setDate(currentMonday.getDate() + idx)
              const isToday = dayDate.toDateString() === new Date().toDateString()

              return (
                <div
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`p-2 border-r border-b border-gray-300 text-center font-semibold cursor-pointer transition ${
                    isToday ? 'bg-yellow-200' : 'bg-gray-200 hover:bg-gray-300'
                  } ${selectedDays.includes(day) ? 'bg-green-200' : ''}`}
                >
                  {day}
                  <div className="text-xs text-gray-500">{formatDate(dayDate)}</div>
                </div>
              )
            })}

            {hours.map((hour) => (
              <React.Fragment key={hour}>
                <div className="p-2 border-t border-r border-b border-gray-300 text-center font-medium bg-gray-50">
                  {hour}
                </div>
                {days.slice(0, 5).map((day) => {
                  const isSelectedDay = selectedDays.includes(day)
                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`h-16 border-t border-r border-b border-gray-200 transition ${
                        isSelectedDay ? 'bg-green-100' : 'hover:bg-blue-50'
                      }`}
                    />
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {!isEditing && (
          <div className="mb-4">
            <button
              onClick={handleEditClick}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
            >
              Start Booking
            </button>
          </div>
        )}

        {isEditing && (
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || isFull}
              className={`px-6 py-2 rounded-lg text-white transition ${
                canSubmit && !isFull ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isFull ? 'The Schedule is Full' : 'Submit Appointment'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default InternshipSchedule
