'use client'
import React from 'react'

type LeaveRecord = {
  id: number
  employee: string
  type: 'Sick' | 'Annual' | 'Personal'
  startDate: string
  endDate: string
  reason: string
}

const initialData: LeaveRecord[] = [
  {
    id: 1,
    employee: 'Alice',
    type: 'Sick',
    startDate: '2025-05-06',
    endDate: '2025-05-08',
    reason: 'Fever and cold',
  },
  {
    id: 2,
    employee: 'Bob',
    type: 'Annual',
    startDate: '2025-05-10',
    endDate: '2025-05-15',
    reason: 'Family vacation',
  },
  {
    id: 3,
    employee: 'Charlie',
    type: 'Personal',
    startDate: '2025-05-12',
    endDate: '2025-05-12',
    reason: 'Bank appointment',
  },
  {
    id: 4,
    employee: 'David',
    type: 'Sick',
    startDate: '2025-05-14',
    endDate: '2025-05-16',
    reason: 'Back pain',
  },
]

const SickLeave = () => {
  return (
    <div className="ml-4 p-4 mt-6 max-w-3xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Leave Records</h2>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Employee</th>
            <th className="border p-2">Leave Type</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((record) => (
            <tr key={record.id} className="hover:bg-gray-50">
              <td className="border p-2">{record.employee}</td>
              <td className="border p-2">{record.type}</td>
              <td className="border p-2">{record.startDate}</td>
              <td className="border p-2">{record.endDate}</td>
              <td className="border p-2">{record.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SickLeave
