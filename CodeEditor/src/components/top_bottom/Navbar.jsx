import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/CodeMaster.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-md border-b border-purple-200">

      {/* Top Navbar */}
      <div className="relative flex items-center justify-between px-4 py-2 bg-white">

        {/* Left Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {/* Courses Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="group-hover:text-purple-600 transition">Courses</span>
            <div className="absolute top-6 left-0 hidden group-hover:block bg-white border-t-4 border-purple-600 shadow-md rounded-sm z-10 min-w-[180px]">
              <ul className="text-sm text-gray-700 p-2 space-y-1">
                <li><NavLink to="/dsa-course/array" className="block hover:bg-purple-100 px-3 py-1 rounded">DSA Course</NavLink></li>
                <li><NavLink to="/web-development/html" className="block hover:bg-purple-100 px-3 py-1 rounded">Web Development</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Tutorials Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="group-hover:text-purple-600 transition">Tutorials</span>
            <div className="absolute top-6 left-0 hidden group-hover:block bg-white border-t-4 border-purple-600 shadow-md rounded-sm z-10 min-w-[180px]">
              <ul className="text-sm text-gray-700 p-2 space-y-1">
                <li><NavLink to="/cpp/basics/intro" className="block hover:bg-purple-100 px-3 py-1 rounded">C++</NavLink></li>
                <li><NavLink to="/python/basics/intro" className="block hover:bg-purple-100 px-3 py-1 rounded">Python</NavLink></li>
                <li><NavLink to="/java/basics/intro" className="block hover:bg-purple-100 px-3 py-1 rounded">Java</NavLink></li>
                <li><NavLink to="/c/basics/intro" className="block hover:bg-purple-100 px-3 py-1 rounded">C</NavLink></li>
                <li><NavLink to="/javascript/basics/intro" className="block hover:bg-purple-100 px-3 py-1 rounded">JavaScript</NavLink></li>
              </ul>
            </div>
          </div>

          <NavLink to="/playground" className="hover:text-purple-600 transition">
            Playground
          </NavLink>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl text-gray-700">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/">
            <img src={logo} alt="CodeMaster" className="h-10 object-contain" />
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-4 text-gray-700 text-lg">
          <FaMoon className="cursor-pointer hover:text-purple-600 transition" />
          <NavLink to="/signin">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-1.5 rounded text-sm">
              Sign In
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t text-sm text-gray-700 space-y-2">
          <div>
            <span className="font-semibold text-purple-600">Courses</span>
            <ul className="pl-4 space-y-1 mt-1">
              <li><NavLink to="/dsa-course/array">DSA Course</NavLink></li>
              <li><NavLink to="/web-development/html">Web Development</NavLink></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-purple-600">Tutorials</span>
            <ul className="pl-4 space-y-1 mt-1">
              <li><NavLink to="/cpp/basics/intro">C++</NavLink></li>
              <li><NavLink to="/python/basics/intro">Python</NavLink></li>
              <li><NavLink to="/java/basics/intro">Java</NavLink></li>
              <li><NavLink to="/javascript/basics/intro">JavaScript</NavLink></li>
              <li><NavLink to="/c/basics/intro">C</NavLink></li>
            </ul>
          </div>
          <NavLink to="/playground" className="block mt-2">Playground</NavLink>
        </div>
      )}

      {/* Bottom Slider Nav */}
      <div className="flex items-center justify-center border-t gap-4 overflow-x-auto px-8 py-2 text-sm text-gray-800 bg-white whitespace-nowrap">
        <NavLink to="/courses" className="hover:text-purple-600 transition">Courses</NavLink>
        <NavLink to="/dsa-course/array" className="hover:text-purple-600 transition">DSA</NavLink>
        <NavLink to="/c/basics/intro" className="hover:text-purple-600 transition">C</NavLink>
        <NavLink to="/cpp/basics/intro" className="hover:text-purple-600 transition">C++</NavLink>
        <NavLink to="/java/basics/intro" className="hover:text-purple-600 transition">Java</NavLink>
        <NavLink to="/python/basics/intro" className="hover:text-purple-600 transition">Python</NavLink>
        <NavLink to="/javascript/basics/intro" className="hover:text-purple-600 transition">JavaScript</NavLink>
        <NavLink to="/web-development/html" className="hover:text-purple-600 transition">Web Development</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
