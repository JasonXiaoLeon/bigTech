"use client"
import React, { useState, useEffect } from 'react'

type AttendanceRecord = {
  name: string
  date: string
  clockIn?: string
  clockOut?: string
}

type AttendanceResponse = {
  permissionLevel: number
  attendance: AttendanceRecord[]
}

const getWeekday = (dateStr: string) => {
  const date = new Date(dateStr)
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
}

const getStartOfWeek = (date: Date) => {
  const day = date.getDay() || 7
  const start = new Date(date)
  start.setDate(date.getDate() - day + 1)
  start.setHours(0, 0, 0, 0)
  return start
}

const getEndOfWeek = (date: Date) => {
  const day = date.getDay() || 7
  const end = new Date(date)
  end.setDate(date.getDate() + (7 - day))
  end.setHours(23, 59, 59, 999)
  return end
}

const formatDate = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${date.getFullYear()}`
}

const generateColors = (names: string[]) => {
  const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200']
  const nameToColor: Record<string, string> = {}
  names.forEach((name, index) => {
    nameToColor[name] = colors[index % colors.length]
  })
  return nameToColor
}

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(currentDate))
  const [endOfWeek, setEndOfWeek] = useState(getEndOfWeek(currentDate))
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([])
  const [permissionLevel, setPermissionLevel] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [attendanceDetails, setAttendanceDetails] = useState<AttendanceRecord | null>(null)

  useEffect(() => {
    setStartOfWeek(getStartOfWeek(currentDate))
    setEndOfWeek(getEndOfWeek(currentDate))

    const fetchAttendanceData = async () => {
      try {
        const response = await fetch(`/api/auth/user/attendance`)
        if (!response.ok) {
          throw new Error('Failed to fetch attendance data')
        }
        const data: AttendanceResponse = await response.json()
        setAttendanceData(data.attendance)
        setPermissionLevel(data.permissionLevel)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAttendanceData()
  }, [currentDate])

  const isCurrentWeek = startOfWeek <= new Date() && endOfWeek >= new Date()

  const weekData = attendanceData.filter(record => {
    const d = new Date(record.date)
    return d >= startOfWeek && d <= endOfWeek
  })

  const groupedByWeekday = weekData.reduce((acc, record) => {
    const weekday = getWeekday(record.date)
    if (!acc[weekday]) acc[weekday] = []
    acc[weekday].push(record)
    return acc
  }, {} as Record<string, AttendanceRecord[]>)

  const nameToColor = generateColors(
    Array.from(new Set(weekData.map((record) => record.name)))
  )

  const handlePrevWeek = () => {
    const prevWeekStart = new Date(startOfWeek)
    prevWeekStart.setDate(startOfWeek.getDate() - 7)
    setCurrentDate(prevWeekStart)
  }

  const handleNextWeek = () => {
    const nextWeekStart = new Date(endOfWeek)
    nextWeekStart.setDate(endOfWeek.getDate() + 1)
    setCurrentDate(nextWeekStart)
  }

  const handleNameClick = (record: AttendanceRecord) => {
    setAttendanceDetails(record)
  }

  const closeModal = () => {
    setAttendanceDetails(null)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (permissionLevel !== null && permissionLevel < 7) return <div></div>

  return (
    <div className="ml-4 p-4 mt-6">
      <h2 className="text-lg font-semibold mb-4">Attendance This Week</h2>

      <div className="flex justify-between items-center mb-4 gap-2">
        <button
          onClick={handlePrevWeek}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          ⬅ Previous
        </button>

        <div className="text-center">
          <h2 className="text-lg font-semibold">{isCurrentWeek ? 'Current Week' : 'Week'}</h2>
          <p className="text-sm text-gray-600">
            {formatDate(startOfWeek)} - {formatDate(endOfWeek)}
          </p>
        </div>

        <button
          onClick={handleNextWeek}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Next ➡
        </button>
      </div>

      <div className="space-y-4">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
          <div key={day} className="border-b border-gray-300 pb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">{day}</h3>
            <div className="flex flex-wrap gap-2">
              {groupedByWeekday[day]?.map((record, index) => (
                <div
                  key={index}
                  onClick={() => handleNameClick(record)}
                  className={`px-4 py-2 rounded cursor-pointer ${nameToColor[record.name]} hover:brightness-95`}
                >
                  {record.name}
                </div>
              ))}

              {groupedByWeekday[day]?.length === 0 && (
                <div className="text-sm text-gray-500">No records</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {attendanceDetails && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full sm:w-1/3 max-w-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Attendance Details</h2>
            <div className="mt-4">
              <p><strong>Name:</strong> {attendanceDetails.name}</p>
              <p><strong>Weekday:</strong> {getWeekday(attendanceDetails.date)}</p>
              <p><strong>Date:</strong> {attendanceDetails.date}</p>
              <p><strong>Clock In:</strong> {attendanceDetails.clockIn}</p>
              <p><strong>Clock Out:</strong> {attendanceDetails.clockOut}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Attendance
