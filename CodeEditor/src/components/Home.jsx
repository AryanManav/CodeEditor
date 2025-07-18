import React from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import SearchBar from './SearchBar.jsx';
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const logos = [
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Walmart', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg' },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-black min-h-screen text-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-40 px-4">
        <h1 className="text-3xl sm:text-5xl font-medium mb-6 leading-tight">
          What Do You Want to Learn Today?
        </h1>

        {/* Search Bar */}
        <div>
          <SearchBar />
        </div>

        {/* Quick Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            { name: 'Full Stack Bootcamp', path: '/web-development/html' },
            { name: 'DSA Crash Course', path: '/dsa-course/array' },
            { name: 'Write Code', path: '/playground' },
            { name: 'Learn Python', path: '/python/basics/intro' },
          ].map((tag, i) => (
            <NavLink
              to={tag.path}
              key={i}
              className="px-4 py-2 border border-purple-300 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white text-sm rounded-full hover:bg-purple-100 dark:hover:bg-gray-700 transition"
            >
              {tag.name}
            </NavLink>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Featured Courses</h2>
          <NavLink to="/courses"><button className="text-sm text-purple-600 hover:underline font-medium">View All</button></NavLink>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Complete DSA Bootcamp',
              desc: 'Master data structures and algorithms with hands-on problems.',
              rating: '/dsa-course/array',
            },
            {
              title: 'Frontend Pro Class',
              desc: 'Build modern UIs using React, Tailwind CSS, and real APIs.',
              rating: '/web-development/html',
            },
            {
              title: 'Learn Java',
              desc: 'Understand core Java, OOPs, and real-world system design.',
              rating: '/java/basics/intro',
            },
            {
              title: 'JavaScript Documentation',
              desc: 'Master JavaScript fundamentals and advanced concepts with examples.',
              rating: '/javascript/basics/intro',
            },
          ]
            .map((course, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-md transition p-6"
              >
                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{course.desc}</p>
                <NavLink to={course.rating}><div className="text-sm text-purple-600 font-medium">Explore Now →</div></NavLink>

              </div>
            ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-2xl font-medium mb-6">Explore</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Data Structure and Algorithms",
              color: "from-teal-400 to-emerald-500",
              path: "/dsa-course/array"
            },
            {
              title: "Practice DSA",
              color: "from-indigo-500 to-violet-500",
              path: "/practice"
            },
            {
              title: "Web Development",
              color: "from-rose-400 to-rose-300",
              path: "/web-development/html"
            },
            {
              title: "Interactive Playground",
              color: "from-purple-800 to-purple-400",
              path: "/playground"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-md text-white py-20 px-8 flex flex-col items-center justify-center text-center bg-gradient-to-br ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <NavLink to={item.path}>              <button className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 border border-white px-5 py-2 rounded-md text-base font-medium transition">
                View more <FiArrowRight />
              </button></NavLink>

            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-black mt-20 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Why Choose CodeMaster?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hands-on Learning",
                desc: "Build real projects while learning to solidify concepts."
              },
              {
                title: "Expert Instructors",
                desc: "Learn from industry experts and FAANG engineers."
              },
              {
                title: "Lifetime Access",
                desc: "Once enrolled, access course content anytime."
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg border dark:border-gray-600 hover:shadow-md transition">
                <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-medium mb-6">What Our Learners Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              name: 'Ananya Sharma',
              feedback: 'The DSA Bootcamp helped me crack my dream job at Amazon!',
              rating: 5,
            },
            {
              name: 'Rohan Gupta',
              feedback: 'Courses are practical, beginner-friendly and super helpful.',
              rating: 4,
            },
          ].map((t, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-800 border rounded-lg p-6 border-gray-200 dark:border-gray-600">
              <p className="mb-2 text-gray-700 dark:text-gray-300">"{t.feedback}"</p>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">{t.name}</span>
                <span className="ml-auto flex items-center gap-1 text-purple-500">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="mt-20 bg-gradient-to-b from-white to-purple-50 dark:from-black dark:to-gray-900 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-purple-500 mb-8">Trusted by Learners from</h2>
          <div className="flex justify-center gap-10 flex-wrap items-center">
            {logos.map(({ name, url }, i) => (
              <img
                key={i}
                src={url}
                alt={name}
                className="h-8 grayscale hover:grayscale-0 transition duration-200"
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
