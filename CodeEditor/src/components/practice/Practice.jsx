import React from 'react';
import { Link } from 'react-router-dom';

const Practice = () => {
  const problems = [
    { title: 'Two Sum', path: '/problems/two-sum' },
    { title: 'Binary Search', path: '/problems/binary-search' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-black min-h-screen text-gray-900 dark:text-white px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-10">
        Explore Problems
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((prob) => (
          <Link
            key={prob.path}
            to={prob.path}
            className="p-4 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg hover:shadow-lg dark:hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{prob.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Solve now →</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Practice;
