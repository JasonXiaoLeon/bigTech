'use client'
import React, { useState } from 'react'

interface BookingFormProps {
  onClose: () => void
  email: string
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose, email }) => {
  const [formData, setFormData] = useState({
    datetime: '',
    email: email,
    phone: '',
    purpose: '',
    comment:'',
    isCancelled: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)

    const selectedDate = new Date(formData.datetime)
    const now = new Date()

    const minBookingDate = new Date()
    minBookingDate.setDate(now.getDate() + 2)

    const dayOfWeek = selectedDate.getDay() // 0 = Sunday, 6 = Saturday

    if (selectedDate < minBookingDate) {
      alert('Booking must be made at least 2 days in advance.')
      setIsSubmitting(false)
      return
    }

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert('Booking date must be on a weekday (Monday to Friday).')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.success) {
        const operationLog = {
          email: formData.email,
          datetime: formData.datetime,
          operationType: 'submit',
          purpose: formData.purpose,
        }

        await fetch('/api/useroperation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(operationLog),
        })

        alert('Booking submitted successfully!')
        console.log('Inserted Booking ID:', result.insertedId)
        onClose()
      } else {
        alert('Failed to submit booking.')
      }
    } catch (err) {
      console.error('Booking submission error:', err)
      alert('Something went wrong.')
    }

    setIsSubmitting(false)
  }

  // 获取最小可选时间（当前时间 + 2 天，确保工作日）
  const getMinDateTime = () => {
    const minDate = new Date()
    minDate.setDate(minDate.getDate() + 2)

    const dayOfWeek = minDate.getDay()

    // 如果是周六(6)或周日(0)，调整日期
    if (dayOfWeek === 6) {
      minDate.setDate(minDate.getDate() + 2) // 跳到下周一
    } else if (dayOfWeek === 0) {
      minDate.setDate(minDate.getDate() + 1) // 跳到下周一
    }

    const offset = minDate.getTimezoneOffset() * 60000
    return new Date(minDate.getTime() - offset).toISOString().slice(0, 16)
  }

  return (
    <form onSubmit={handleSubmit} className="w-[390px] mx-auto p-4 border rounded shadow space-y-4 bg-white">
      <div>
        <h3 className="text-xl p-3 font-semibold text-center">New Booking</h3>
      </div>

      <div>
        <label htmlFor="datetime" className="block font-medium text-gray-700">*Booking Date & Time</label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          min={getMinDateTime()}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">Must be at least 2 days in advance and on a weekday.</p>
      </div>

      <div>
        <label htmlFor="email" className="block font-medium text-gray-700">*Contact Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded bg-gray-100 pointer-events-none"
          readOnly
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium text-gray-700">*Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder='Please enter the phone number'
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="purpose" className="block font-medium text-gray-700">*Booking Purpose</label>
        <select
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded text-gray-700"
        >
          <option value="">Select a purpose</option>
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
          maxLength={200}
          placeholder="Please enter your comment"
          value={formData.comment}
          onChange={(e) => handleChange(e as any)}
          rows={3}
          className="w-full border px-3 py-2 rounded resize-none"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          Back
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white ml-[16px] px-4 py-2 rounded hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default BookingForm
