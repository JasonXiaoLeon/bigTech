import React from 'react'

type AttendanceRecord = {
  name: string
  checkIn: string
  checkOut: string
  date: string // 'YYYY-MM-DD'
}

const mockData: AttendanceRecord[] = [
  { name: 'Alice', checkIn: '09:02', checkOut: '17:59', date: '2025-05-05' },
  { name: 'Bob', checkIn: '09:10', checkOut: '18:10', date: '2025-05-06' },
  { name: 'Charlie', checkIn: '08:55', checkOut: '17:45', date: '2025-05-07' },
  { name: 'Alice', checkIn: '09:05', checkOut: '18:00', date: '2025-05-06' },
  { name: 'Bob', checkIn: '09:00', checkOut: '17:50', date: '2025-05-11' }, // Sunday
]

const getWeekday = (dateStr: string) => {
  const date = new Date(dateStr)
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
}

type Props = {
  startDate: Date
  endDate: Date
}

const Attendance = ({ startDate, endDate }: Props) => {
  const filtered = mockData.filter((record) => {
    const d = new Date(record.date)
    return d >= startDate && d <= endDate
  })

  return (
    <div className="p-4 mt-6">
      <h2 className="text-lg font-semibold mb-2">Attendance This Week</h2>
      {filtered.length === 0 ? (
        <p className="text-gray-500">No attendance records this week.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border border-gray-300">Name</th>
                <th className="p-2 border border-gray-300">Date</th>
                <th className="p-2 border border-gray-300">Weekday</th>
                <th className="p-2 border border-gray-300">Check In</th>
                <th className="p-2 border border-gray-300">Check Out</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border border-gray-300">{record.name}</td>
                  <td className="p-2 border border-gray-300">{record.date}</td>
                  <td className="p-2 border border-gray-300">{getWeekday(record.date)}</td>
                  <td className="p-2 border border-gray-300">{record.checkIn}</td>
                  <td className="p-2 border border-gray-300">{record.checkOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Attendance
