'use client';
import React from 'react';

type FilterOption = {
  label: string;
  value: string;
};

type MultiFilterProps = {
  filters: {
    label: string;
    options: FilterOption[];
    value: string;
    onChange: (value: string) => void;
  }[];
  sortOrder: 'asc' | 'desc';
  onSortChange: (order: 'asc' | 'desc') => void;
};

const Filter = ({ filters, sortOrder, onSortChange }: MultiFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 justify-center">
      {filters.map((filter, index) => (
        <select
          key={index}
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          className="bg-white text-black p-2 rounded"
        >
          {filter.options.map((option) => (
            <option key={option.value} value={option.value}>
              {filter.label}: {option.label}
            </option>
          ))}
        </select>
      ))}

      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as 'asc' | 'desc')}
        className="bg-white text-black p-2 rounded"
      >
        <option value="desc">Time: Newest First</option>
        <option value="asc">Time: Oldest First</option>
      </select>
    </div>
  );
};

export default Filter;
