import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e=>onChange(e.target.value)}
      placeholder="Search..."
      className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
    />
  );
}
