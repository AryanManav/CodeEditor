import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaBars, FaTimes, FaSun } from 'react-icons/fa';
import { UserButton, useUser, SignInButton, SignOutButton  } from '@clerk/clerk-react';

import logoDark from '../../assets/CodeMaster.png';
import logoLight from '../../assets/CodeMasterW.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const { user } = useUser();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="w-full shadow-md border-purple-300 dark:border-purple-300 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Top Bar */}
      <div className="relative flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          {/* Courses Dropdown */}
          <div className="relative group cursor-pointer">
            <NavLink to="/courses" className="group-hover:text-purple-600 dark:hover:text-purple-300 transition">Courses</NavLink>
            <div className="absolute top-6 left-0 hidden group-hover:block bg-white dark:bg-gray-800 border-t-4 border-purple-300 shadow-lg rounded-sm z-20 min-w-[180px]">
              <ul className="text-sm text-gray-700 dark:text-gray-100 p-2 space-y-1">
                <li><NavLink to="/dsa-course/array" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">DSA Course</NavLink></li>
                <li><NavLink to="/web-development/html" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">Web Development</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Tutorials Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="group-hover:text-purple-600 dark:hover:text-purple-300 transition">Tutorials</span>
            <div className="absolute top-6 left-0 hidden group-hover:block bg-white dark:bg-gray-800 border-t-4 border-purple-300 shadow-lg rounded-sm z-20 min-w-[180px]">
              <ul className="text-sm text-gray-700 dark:text-gray-100 p-2 space-y-1">
                <li><NavLink to="/cpp/basics/intro" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">C++</NavLink></li>
                <li><NavLink to="/python/basics/intro" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">Python</NavLink></li>
                <li><NavLink to="/java/basics/intro" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">Java</NavLink></li>
                <li><NavLink to="/c/basics/intro" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">C</NavLink></li>
                <li><NavLink to="/javascript/basics/intro" className="block hover:bg-purple-100 dark:hover:bg-purple-900 px-3 py-1 rounded">JavaScript</NavLink></li>
              </ul>
            </div>
          </div>

          <NavLink to="/playground" className="hover:text-purple-600 dark:hover:text-purple-300 transition">Playground</NavLink>
          <NavLink to="/practice" className="hover:text-purple-600 dark:hover:text-purple-300 transition">Practice</NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-300">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/">
            <img src={darkMode ? logoLight : logoDark} alt="CodeMaster" className="h-10 object-contain" />
          </NavLink>
        </div>

        <div className="ml-auto flex items-center gap-4 text-gray-700 dark:text-gray-200 text-lg">
          {/* <button onClick={toggleTheme} aria-label="Toggle theme" className="hover:text-purple-600 dark:hover:text-purple-400">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={user.imageUrl}
                  alt="User"
                  className="w-9 h-9 rounded-md cursor-pointer hover:opacity-90"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg z-50">
                  <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
                    Dashboard
                  </NavLink>
                  <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
                    Profile
                  </NavLink>
                  <SignOutButton>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
                      Sign Out
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white px-4 py-1.5 rounded text-sm transition">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>

      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white dark:bg-gray-900 border-t text-sm text-gray-700 dark:text-gray-200 space-y-2">
          <div>
            <span className="font-semibold text-purple-600 dark:text-purple-400">Courses</span>
            <ul className="pl-4 mt-1 space-y-1">
              <li><NavLink to="/dsa-course/array" className="block hover:text-purple-600 dark:hover:text-purple-400">DSA Course</NavLink></li>
              <li><NavLink to="/web-development/html" className="block hover:text-purple-600 dark:hover:text-purple-400">Web Development</NavLink></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-purple-600 dark:text-purple-400">Tutorials</span>
            <ul className="pl-4 mt-1 space-y-1">
              <li><NavLink to="/cpp/basics/intro" className="block hover:text-purple-600 dark:hover:text-purple-400">C++</NavLink></li>
              <li><NavLink to="/python/basics/intro" className="block hover:text-purple-600 dark:hover:text-purple-400">Python</NavLink></li>
              <li><NavLink to="/java/basics/intro" className="block hover:text-purple-600 dark:hover:text-purple-400">Java</NavLink></li>
              <li><NavLink to="/javascript/basics/intro" className="block hover:text-purple-600 dark:hover:text-purple-400">JavaScript</NavLink></li>
              <li><NavLink to="/c/basics/intro" className="block hover:text-purple-600 dark:hover:text-purple-400">C</NavLink></li>
            </ul>
          </div>
          <NavLink to="/playground" className="block mt-2 hover:text-purple-600 dark:hover:text-purple-400">Playground</NavLink>
          <NavLink to="/practice" className="block hover:text-purple-600 dark:hover:text-purple-400">Practice</NavLink>
        </div>
      )}

      {/* Bottom Scroll Nav */}
      <div className="flex items-center justify-center border-t border-purple-300 dark:border-purple-300 gap-4 overflow-x-auto px-8 py-2 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 whitespace-nowrap">
        <NavLink to="/courses" className="hover:text-purple-600 dark:hover:text-purple-400">Courses</NavLink>
        <NavLink to="/dsa-course/array" className="hover:text-purple-600 dark:hover:text-purple-400">DSA</NavLink>
        <NavLink to="/c/basics/intro" className="hover:text-purple-600 dark:hover:text-purple-400">C</NavLink>
        <NavLink to="/cpp/basics/intro" className="hover:text-purple-600 dark:hover:text-purple-400">C++</NavLink>
        <NavLink to="/java/basics/intro" className="hover:text-purple-600 dark:hover:text-purple-400">Java</NavLink>
        <NavLink to="/python/basics/intro" className="hover:text-purple-600 dark:hover:text-purple-400">Python</NavLink>
        <NavLink to="/javascript/basics/intro" className="hover:text-purple-600 dark:hover:text-purple-400">JavaScript</NavLink>
        <NavLink to="/web-development/html" className="hover:text-purple-600 dark:hover:text-purple-400">Web Development</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
