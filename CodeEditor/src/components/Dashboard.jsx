// Dashboard.jsx
import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useUser();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#1a1a1a] p-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

                {/* Left Profile Card */}
                <div className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 w-full lg:w-1/4 shadow">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={user?.imageUrl}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <h2 className="text-xl font-bold dark:text-white">
                            {user?.fullName || "No Name"}
                        </h2>
                        <p className="text-sm text-gray-500">
                            @{user?.username || user?.primaryEmailAddress?.emailAddress}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Rank <span className="font-semibold">985,964</span>
                        </p>
                        <NavLink to="/profile">
                            <button className="mt-4 px-4 py-2 text-sm bg-green-100 dark:bg-green-800 text-green-700 dark:text-white rounded shadow hover:bg-green-200">
                                Edit Profile
                            </button>
                        </NavLink>

                    </div>

                    <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
                        <h3 className="font-semibold mt-4 mb-2">Languages</h3>
                        <ul className="space-y-1">
                            <li>Java - 129 problems</li>
                            <li>C++ - 3 problems</li>
                            <li>Python3 - 1 problem</li>
                        </ul>
                    </div>
                </div>

                {/* Right Dashboard Section */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">Contest Rating</h3>
                        <p className="text-xl font-bold dark:text-purple-300">1,412</p>
                        <p className="text-sm text-gray-500">Global Ranking: 577,175 / 720,317</p>
                        <p className="text-sm text-gray-500">Attended: 1</p>
                    </div>

                    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">Top %</h3>
                        <p className="text-2xl font-bold text-purple-500">80.47%</p>
                    </div>

                    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow col-span-2">
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">Problems Solved</h3>
                        <p className="text-3xl font-bold dark:text-green-300">130 / 3617</p>
                        <p className="text-sm text-gray-400">3 Attempting</p>
                        <div className="flex justify-between mt-4 text-sm">
                            <span className="text-blue-500">Easy: 43 / 885</span>
                            <span className="text-yellow-500">Medium: 79 / 1881</span>
                            <span className="text-red-500">Hard: 8 / 851</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow col-span-2">
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">Submissions (last year)</h3>
                        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-sm text-gray-500">
                            Contribution Graph Here
                        </div>
                        <p className="mt-2 text-sm text-gray-400">Total active days: 42 | Max streak: 17</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
