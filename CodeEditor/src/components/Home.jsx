import React from 'react';
import { FaSearch, FaStar } from 'react-icons/fa'
import SearchBar from './SearchBar.jsx';
import { FiArrowRight } from "react-icons/fi";

const logos = [
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  // { name: 'Adobe', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Systems_logo_and_wordmark.svg' },
  { name: 'Walmart', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg' },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-white to-white min-h-screen">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-40 px-4">
        <h1 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6 leading-tight">
          What Do You Want to Learn Today?
        </h1>

        {/* Search Bar */}
        <div>
          <SearchBar />
        </div>

        {/* Quick Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            'Full Stack Bootcamp',
            'DSA Crash Course',
            'AI & ML Mastery',
            'Web Dev with React',
          ].map((tag, i) => (
            <button
              key={i}
              className="px-4 py-2 border border-purple-300 bg-white text-sm rounded-full hover:bg-purple-100 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-gray-800">Featured Courses</h2>
          <button className="text-sm text-purple-600 hover:underline font-medium">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Complete DSA Bootcamp',
              desc: 'Master data structures & algorithms from scratch.',
              rating: 4.8,
            },
            {
              title: 'Frontend Pro Class',
              desc: 'Build responsive UI using React, Tailwind, and APIs.',
              rating: 4.7,
            },
            {
              title: 'System Design Simplified',
              desc: 'Learn low & high-level design with real-world examples.',
              rating: 4.9,
            },
            {
              title: 'System Design Simplified',
              desc: 'Learn low & high-level design with real-world examples.',
              rating: 4.9,
            },
            {
              title: 'System Design Simplified',
              desc: 'Learn low & high-level design with real-world examples.',
              rating: 4.9,
            },
            {
              title: 'System Design Simplified',
              desc: 'Learn low & high-level design with real-world examples.',
              rating: 4.9,
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-white to-purple-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{course.desc}</p>
              <div className="text-sm text-purple-600 font-medium">Enroll Now →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">Explore</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Data Structure and Algorithms",
              color: "from-teal-400 to-emerald-500",
            },
            {
              title: "Practice DSA",
              color: "from-indigo-500 to-violet-500",
            },
            {
              title: "Web Development",
              color: "from-rose-400 to-rose-300",
            },
            {
              title: "AI ML & Data Science",
              color: "from-purple-800 to-purple-400",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-md text-white py-20 px-8 flex flex-col items-center justify-center text-center bg-gradient-to-br ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <button className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 border border-white px-5 py-2 rounded-md text-base font-medium transition">
                View more <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-purple-50 to-white mt-20 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Why Choose CodeMaster?</h2>
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
              <div key={idx} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg border hover:shadow-md transition">
                <h3 className="font-semibold mb-2 text-purple-700">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">What Our Learners Say</h2>
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
            <div key={i} className="bg-gradient-to-br from-white to-purple-50 border rounded-lg p-6">
              <p className="text-gray-700 mb-2">"{t.feedback}"</p>
              <div className="flex items-center text-sm text-gray-600">
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
      <section className="mt-20 bg-gradient-to-b from-white to-purple-50 py-20 px-4">
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
