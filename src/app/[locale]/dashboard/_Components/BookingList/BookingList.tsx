'use client'
import React, { FC, useEffect, useState, useCallback } from 'react'
import EditBookingDetails from '../EditBookingDetails/EditBookingDetails'
import BookingForm from '../BookingForm/BookingForm'
import Paginator from '../Paginator/Paginator'

type Booking = {
  _id: string
  datetime: string
  email: string
  phone: string
  purpose: string
  createdAt: string
  isCancelled: boolean
  comment:string
}

interface userEmail {
  email: string
}

const BookingList: React.FC<userEmail> = ({ email }) => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const fetchBookings = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/booking/${email}`)
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setBookings(data)
    } catch (err) {
      console.error('Failed to fetch bookings:', err)
    } finally {
      setLoading(false)
    }
  }, [email])

  useEffect(() => {
    fetchBookings()
  }, [fetchBookings])

  const handleCloseEdit = () => {
    setSelectedBooking(null)
    fetchBookings()
  }

  const totalPages = Math.ceil(bookings.filter(booking => !booking.isCancelled && new Date(booking.datetime) > new Date()).length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const currentBookings = bookings
    .filter(booking => !booking.isCancelled && new Date(booking.datetime) > new Date())
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="relative flex flex-col items-center w-[360px] lg:w-[990px] lg:h-[732px] mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md">
      <div className="relative justify-center w-full flex h-[80px] items-center">
        <h2 className="text-2xl font-bold">My Booking</h2>
        <button className="absolute right-0" onClick={() => setShowBookingForm(true)}>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#00c4f4"
          >
            <path d="M512 64.49899c-247.14789 0-447.50101 200.353121-447.50101 447.50101s200.353121 447.50101 447.50101 447.50101 447.50101-200.353121 447.50101-447.50101S759.14789 64.49899 512 64.49899zM750.666728 512c0 13.181207-10.685363 23.86657-23.86657 23.86657L535.86657 535.86657l0 190.933587c0 13.181207-10.685363 23.86657-23.86657 23.86657l0 0c-13.181207 0-23.86657-10.685363-23.86657-23.86657L488.13343 535.86657 297.198819 535.86657c-13.181207 0-23.86657-10.685363-23.86657-23.86657l0 0c0-13.181207 10.685363-23.86657 23.86657-23.86657l190.933587 0L488.132406 297.198819c0-13.181207 10.685363-23.86657 23.86657-23.86657l0 0c13.181207 0 23.86657 10.685363 23.86657 23.86657l0 190.933587 190.933587 0C739.981365 488.13343 750.666728 498.818793 750.666728 512L750.666728 512z" />
          </svg>
        </button>
      </div>
      <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : currentBookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentBookings.map((booking) => (
            <li
              key={booking._id}
              onClick={() => setSelectedBooking(booking)}
              className="cursor-pointer px-[10px] py-[15px] w-[300px] h-[170px] border rounded bg-white shadow"
            >
              <p><strong>Date & Time:</strong> {new Date(booking.datetime).toLocaleString()}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Purpose:</strong> {booking.purpose}</p>
              <p>Comments:{booking.comment}</p>
              <p className="text-sm text-gray-500">Propose: {new Date(booking.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
      {(selectedBooking || showBookingForm) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-40"
          onClick={() => {
            setSelectedBooking(null)
            setShowBookingForm(false)
          }}
        />
      )}

      {selectedBooking && (
        <div className="z-40">
          <EditBookingDetails booking={selectedBooking} onClose={handleCloseEdit} />
        </div>
      )}

      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <BookingForm
            onClose={() => {
              setShowBookingForm(false)
              fetchBookings()
            } }
            email={email}          
          />
        </div>
        
      )}
    </div>
  )
}

export default BookingList
