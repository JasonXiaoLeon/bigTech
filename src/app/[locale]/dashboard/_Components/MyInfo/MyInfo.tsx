'use client'

import React, { useEffect, useState } from 'react'

interface Props {
  email: string
}

interface User {
  email: string
  gender: string
  age: number | null
  avatar: string
}

const MyInfo: React.FC<Props> = ({ email }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [updatedUser, setUpdatedUser] = useState<User | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const fetchUser = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/auth/user?email=${email}`)
      if (!res.ok) throw new Error('Failed to fetch user')
      const data = await res.json()
      setUser(data)
      setUpdatedUser(data)
      setError(null)
    } catch (err: any) {
      setError(err.message)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (email) {
      fetchUser()
    }
  }, [email])

  const handleSave = async () => {
    if (newPassword && newPassword !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const updates = { ...updatedUser, newPassword }
      const res = await fetch(`/api/auth/user`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, updates }),
      })

      if (!res.ok) throw new Error('Failed to update user')
      const data = await res.json()

      fetchUser()

      alert('User info updated successfully!')

      setEditMode(false)
      setNewPassword('')
      setConfirmPassword('')
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  if (loading) return <p>Loading user info...</p>
  if (error) return <p className="text-red-500">Error: {error}</p>
  if (!user) return <p>User not found</p>

  return (
    <div className="w-[500px] mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">User Info</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          {editMode ? (
            <select
              value={updatedUser?.gender || ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser!, gender: e.target.value })}
              className="mt-1 w-full p-2 border rounded"
            >
              <option value="unknown">Unknown</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p>{user.gender}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          {editMode ? (
            <input
              type="number"
              value={updatedUser?.age ?? ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser!, age: Number(e.target.value) })}
              className="mt-1 w-full p-2 border rounded"
              min="1"
            />
          ) : (
            <p>{user.age !== null ? user.age : 'Not specified'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Avatar</label>
          {editMode ? (
            <input
              type="text"
              value={updatedUser?.avatar || ''}
              onChange={(e) => setUpdatedUser({ ...updatedUser!, avatar: e.target.value })}
              className="mt-1 w-full p-2 border rounded"
            />
          ) : user.avatar ? (
            <img src={user.avatar} alt="avatar" className="w-32 h-32 rounded-full mx-auto mt-2" />
          ) : (
            <p>No avatar uploaded</p>
          )}
        </div>

        {editMode && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
          </>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        {editMode ? (
          <div className="flex gap-4">
            <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
            <button
              onClick={() => {
                setEditMode(false)
                setNewPassword('')
                setConfirmPassword('')
                setError(null)
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setEditMode(true)
              setError(null)
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Edit Info
          </button>
        )}
      </div>
    </div>
  )
}

export default MyInfo
