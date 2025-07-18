// src/components/SearchBar.jsx

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { searchIndex } from '../data/searchData.js';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const lowerQuery = query.toLowerCase().trim();
    const result = searchIndex.find((item) =>
      item.keyword.includes(lowerQuery)
    );

    if (result) {
      navigate(result.path);
    } else {
      alert('No matching course found');
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center max-w-xl mx-auto border border-purple-300 dark:border-purple-300 rounded-md px-4 py-3 bg-white dark:bg-zinc-900 shadow"
    >
      <input
        type="text"
        placeholder="Search e.g., Python Variables"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
      />
      <button type="submit">
        <FaSearch className="text-purple-600 dark:text-purple-400 text-lg ml-2" />
      </button>
    </form>
  );
};

export default SearchBar;
