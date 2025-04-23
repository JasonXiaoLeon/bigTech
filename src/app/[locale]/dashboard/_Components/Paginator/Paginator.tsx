import React from 'react';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    let pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push('...');

      for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 3) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        &lt;
      </button>

      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => {
            if (typeof page === 'number') onPageChange(page);
          }}
          className={`px-4 py-2 rounded ${
            typeof page === 'number'
              ? currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-white'
              : 'text-gray-400'
          }`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Paginator;
