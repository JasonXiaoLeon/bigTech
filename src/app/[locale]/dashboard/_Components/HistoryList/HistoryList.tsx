'use client';
import React, { useEffect, useState } from 'react';
import Paginator from '../Paginator/Paginator';
import Filter from '../Filter/Filter';

type OperationLog = {
  _id: string;
  email: string;
  timestamp: string;
  operationType: string;
};

const HistoryList = () => {
  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Submit', value: 'submit' },
    { label: 'Update', value: 'update' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Delete', value: 'delete' },
    { label: 'Login', value: 'login' },
  ];

  const [userOperations, setUserOperations] = useState<OperationLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [filterType, setFilterType] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const itemsPerPage = 4;

  const fetchUserOperations = async () => {
    try {
      const res = await fetch('/api/useroperation');
      if (!res.ok) throw new Error('Failed to fetch operation logs');
      const data = await res.json();
      if (data.success) {
        setUserOperations(data.data);
      } else {
        setError('No operations found for this user.');
      }
    } catch (err) {
      console.error('Error fetching operations:', err);
      setError('Failed to load operation logs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserOperations();
  }, []);

  const filteredOperations = userOperations
    .filter((op) => filterType === 'all' || op.operationType === filterType)
    .sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime();
      const timeB = new Date(b.timestamp).getTime();
      return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
    });

  useEffect(() => {
    setTotalPages(Math.ceil(filteredOperations.length / itemsPerPage));
  }, [filteredOperations]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterType, sortOrder]);

  const currentPageOperations = filteredOperations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">User Operation History</h2>
      
      <Filter
        filters={[
          {
            label: 'Operation Type',
            options: filterOptions,
            value: filterType,
            onChange: (val) => {
              setFilterType(val);
              setCurrentPage(1);
            },
          },
        ]}
        sortOrder={sortOrder}
        onSortChange={(order) => setSortOrder(order)}
      />
      
      {filteredOperations.length === 0 ? (
        <p className="text-center text-gray-400">No operation logs found.</p>
      ) : (
        <div className="space-y-4 h-[600px]">
          {currentPageOperations.map((operation) => (
            <div
              key={operation._id}
              className="bg-gray-800 p-6 rounded-lg h-[130px] shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg text-white font-semibold">
                <strong>Email:</strong> {operation.email}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Timestamp:</strong> {new Date(operation.timestamp).toLocaleString()}
              </p>
              <p className="text-gray-200">
                <strong>Operation Type:</strong> {operation.operationType}
              </p>
            </div>
          ))}
        </div>
      )}

      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HistoryList;
