'use client'
import { formatDateTime } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface LeaveRequest {
  _id: number
  email: string
  reason: string
  startDate: string
  endDate: string
  status: 'pending' | 'approved' | 'rejected'
}

const AskForLeaveAdminSystem = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLeaveRequests()
  }, [])

  const fetchLeaveRequests = async () => {
    try {
      const res = await fetch('/api/auth/user/leave')
      if (!res.ok) throw new Error('请求失败')
      const data = await res.json()
      setLeaveRequests(data)
    } catch (err) {
      console.error('Error fetching leave requests:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (_id: number) => {
    try {
      const res = await fetch(`/api/auth/user/leave/${_id}/approve`, {
        method: 'POST',
      })
      if (!res.ok) throw new Error('审批失败')
      fetchLeaveRequests()
    } catch (err) {
      console.error(err)
    }
  }

  const handleReject = async (_id: number) => {
    try {
      const res = await fetch(`/api/auth/user/leave/${_id}/reject`, {
        method: 'POST',
      })
      if (!res.ok) throw new Error('拒绝失败')
      fetchLeaveRequests()
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div>加载中...</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">请假审批系统</h1>
      {leaveRequests.length === 0 ? (
        <div>暂无请假申请</div>
      ) : (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">姓名</th>
              <th className="p-2 border">请假理由</th>
              <th className="p-2 border">起始时间</th>
              <th className="p-2 border">状态</th>
              <th className="p-2 border">操作</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map(req => (
              <tr key={req._id}>
                <td className="p-2 border">{req.email}</td>
                <td className="p-2 border">{req.reason}</td>
                <td className="p-2 border">
                {formatDateTime(req.startDate)} - {formatDateTime(req.endDate)}
                </td>
                <td className="p-2 border">
                  {req.status === 'pending'
                    ? '待审批'
                    : req.status === 'approved'
                    ? '已通过'
                    : '已拒绝'}
                </td>
                <td className="p-2 border">
                  {req.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => handleApprove(req._id)}
                        className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                      >
                        同意
                      </button>
                      <button
                        onClick={() => handleReject(req._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        拒绝
                      </button>
                    </>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AskForLeaveAdminSystem
