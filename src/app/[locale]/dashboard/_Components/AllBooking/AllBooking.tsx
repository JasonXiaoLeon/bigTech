'use client';
import React, { FC, useEffect, useState } from 'react';
import Paginator from '../Paginator/Paginator';
import Filter from '../Filter/Filter';

type Booking = {
  _id: string;
  datetime: string;
  email: string;
  phone: string;
  purpose: string;
  createdAt: string;
  isCancelled: boolean;
};

interface UserEmail {
  email: string;
}

const AllBooking: FC<UserEmail> = ({ email }) => {
  const statusOptions = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Cancelled', value: 'cancelled' },
    { label: 'Expired', value: 'expired' },
    { label: 'Past', value: 'past' },
  ];

  const purposeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Consultation', value: 'consultation' },
    { label: 'Product Demo', value: 'product-demo' },
    { label: 'Follow-up', value: 'follow-up' },
  ];

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [purposeFilter, setPurposeFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchAllBookings = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/booking/${email}`);
        if (!res.ok) throw new Error('Failed to fetch bookings');
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBookings();
  }, [email]);

  const filteredBookings = bookings.filter((booking) => {
    const bookingTime = new Date(booking.datetime);
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const isPast = bookingTime < sixMonthsAgo;
    const isCancelled = booking.isCancelled;
    const isExpired = !isCancelled && bookingTime < now;
    const isActive = !isCancelled && bookingTime >= now;

    const matchStatus = {
      active: isActive,
      cancelled: isCancelled,
      expired: isExpired,
      past: isPast,
      all: true,
    };

    const statusMatch = matchStatus[statusFilter as keyof typeof matchStatus];
    const purposeMatch =
      purposeFilter === 'all' || booking.purpose.toLowerCase() === purposeFilter;

    return statusMatch && purposeMatch;
  });

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    const timeA = new Date(a.datetime).getTime();
    const timeB = new Date(b.datetime).getTime();
    return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
  });

  const currentPageBookings = sortedBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setTotalPages(Math.ceil(filteredBookings.length / itemsPerPage));
  }, [filteredBookings]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">All Bookings</h2>

      <Filter
        filters={[
          {
            label: 'Status',
            options: statusOptions,
            value: statusFilter,
            onChange: (val) => {
              setStatusFilter(val);
              setCurrentPage(1);
            },
          },
          {
            label: 'Purpose',
            options: purposeOptions,
            value: purposeFilter,
            onChange: (val) => {
              setPurposeFilter(val);
              setCurrentPage(1);
            },
          },
        ]}
        sortOrder={sortOrder}
        onSortChange={(order) => {
          setSortOrder(order);
        }}
      />

      <div className="h-[550px] overflow-y-auto">
        {sortedBookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {currentPageBookings.map((booking) => {
              const bookingTime = new Date(booking.datetime);
              const sixMonthsAgo = new Date();
              sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
              const isExpired = !booking.isCancelled && bookingTime < new Date();
              const isPast = bookingTime < sixMonthsAgo;

              const bgColor = booking.isCancelled
                ? 'bg-red-100'
                : isPast
                ? 'bg-yellow-100'
                : isExpired
                ? 'bg-gray-300'
                : 'bg-white';

              const status = booking.isCancelled
                ? 'Cancelled'
                : isPast
                ? 'Past'
                : isExpired
                ? 'Expired'
                : 'Active';

              return (
                <li key={booking._id} className={`px-4 py-3 border rounded shadow ${bgColor}`}>
                  <p><strong>Date & Time:</strong> {bookingTime.toLocaleString()}</p>
                  <p><strong>Email:</strong> {booking.email}</p>
                  <p><strong>Phone:</strong> {booking.phone}</p>
                  <p><strong>Purpose:</strong> {booking.purpose}</p>
                  <p><strong>Status:</strong> {status}</p>
                  <p className="text-sm text-gray-500">Created At: {new Date(booking.createdAt).toLocaleString()}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="pt-4">
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllBooking;
