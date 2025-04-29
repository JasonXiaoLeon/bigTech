'use client'
import React, { useEffect, useState } from 'react'

type Booking = {
  _id: string
  datetime: string
  email: string
  phone: string
  purpose: string
  createdAt: string
  isCancelled: boolean
  comment: string
}

type Props = {
  booking: Booking
  onClose: () => void
}

const EditBookingDetails = ({ booking, onClose }: Props) => {
  const formatDatetime = (datetime: string) => datetime.slice(0, 16)

  const [formData, setFormData] = useState({
    datetime: formatDatetime(booking.datetime),
    email: booking.email,
    phone: booking.phone,
    purpose: booking.purpose,
    comment: booking.comment,
  })

  const [generatedCode, setGeneratedCode] = useState('')
  const [userCode, setUserCode] = useState('')
  const [isCancelled, setIsCancelled] = useState(booking.isCancelled)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [isCodeSent, setIsCodeSent] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const CODE_EXPIRY_SECONDS = 60

  // 初始化倒计时逻辑
  useEffect(() => {
    const lastSendTime = localStorage.getItem('booking-code-send-time')
    if (lastSendTime) {
      const elapsed = Math.floor((Date.now() - parseInt(lastSendTime)) / 1000)
      const remaining = CODE_EXPIRY_SECONDS - elapsed
      if (remaining > 0) {
        setIsCodeSent(true)
        setCountdown(remaining)
      }
    }
  }, [])

  // 倒计时更新逻辑
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCodeSent && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setIsCodeSent(false)
            localStorage.removeItem('booking-code-send-time')
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isCodeSent, countdown])

  // 修改 handleChange 函数类型以适应 textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'CAPTCHA') {
      setUserCode(value)
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSendCode = () => {
    if (isCodeSent) return

    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedCode(code)
    alert(`模拟验证码已发送：${code}`)

    const now = Date.now()
    localStorage.setItem('booking-code-send-time', now.toString())
    setIsCodeSent(true)
    setCountdown(CODE_EXPIRY_SECONDS)
  }

  const handleCancelBooking = async () => {
    if (userCode !== generatedCode) {
      alert('验证码错误，请重新输入')
      return
    }

    try {
      const res = await fetch(`/api/booking/${booking.email}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: booking._id,
          datetime: booking.datetime,
          purpose: booking.purpose,
          isCancelled: true,
        }),
      })

      if (res.ok) {
        setIsCancelled(true)
        alert('预约已成功取消')

        await fetch('/api/useroperation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: booking.email,
            datetime: booking.datetime,
            operationType: 'cancel',
            purpose: booking.purpose,
          }),
        })

        onClose()
      } else {
        alert('取消失败，请稍后再试')
      }
    } catch (err) {
      console.error(err)
      alert('发生错误，请重试')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return
    setIsSubmitting(true)

    const isModified =
      formData.datetime !== formatDatetime(booking.datetime) ||
      formData.phone !== booking.phone ||
      formData.purpose !== booking.purpose ||
      formData.comment !== booking.comment

    if (!isModified) {
      alert('没有检测到任何更改')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch(`/api/booking/${booking.email}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: booking._id,
          datetime: formData.datetime,
          purpose: formData.purpose,
          isCancelled,
          comment: formData.comment,
        }),
      })

      if (res.ok) {
        await fetch('/api/useroperation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: booking.email,
            datetime: formData.datetime,
            operationType: 'update',
            purpose: formData.purpose,
          }),
        })

        alert('预约已更新')
        onClose()
      } else {
        alert('更新失败')
      }
    } catch (err) {
      console.error(err)
      alert('发生错误，请重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <form onSubmit={handleSubmit} className="bg-white rounded p-6 space-y-4 w-full max-w-md">
        <h3 className="text-xl font-semibold text-center">Edit Booking</h3>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100 pointer-events-none"
          />
        </div>

        <div>
          <label className="block font-medium">Date & Time</label>
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex space-x-2">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-2/3 border px-3 py-2 rounded"
            placeholder="Enter phone number"
          />
          <button
            type="button"
            onClick={handleSendCode}
            disabled={isCodeSent}
            className={`w-1/3 px-3 py-2 rounded text-white ${isCodeSent ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isCodeSent ? `${countdown}s` : 'Send'}
          </button>
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            name="CAPTCHA"
            value={userCode}
            onChange={handleChange}
            className="w-2/3 border px-3 py-2 rounded"
            placeholder="Enter verification code"
          />
          <button type="button" onClick={handleCancelBooking} className="w-1/3 bg-red-600 text-white px-3 py-2 rounded">
            Cancel
          </button>
        </div>

        <div>
          <label className="block font-medium">Purpose</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select purpose</option>
            <option value="consultation">Consultation</option>
            <option value="product-demo">Product Demo</option>
            <option value="meeting">Meeting</option>
            <option value="follow-up">Follow-up</option>
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block font-medium text-gray-700">Comment</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Please enter the comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            style={{ resize: 'none' }} 
          />
        </div>

        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white ml-[16px] px-4 py-2 rounded hover:bg-blue-700"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditBookingDetails
