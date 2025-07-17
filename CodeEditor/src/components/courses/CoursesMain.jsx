import { NavLink } from 'react-router-dom';

const CoursesMain = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">Explore Our Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* DSA Course */}
        <NavLink
          to="/dsa-course/array"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg border border-purple-200 transition"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2">DSA Mastery</h2>
          <p className="text-gray-600">
            Learn core data structures and algorithms with practice problems and visualizations.
          </p>
        </NavLink>

        {/* Web Development */}
        <NavLink
          to="/web-development/html"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg border border-purple-200 transition"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Web Development</h2>
          <p className="text-gray-600">
            Dive into HTML, CSS, JavaScript, and modern frameworks to build full-stack websites.
          </p>
        </NavLink>

        {/* Add more courses in future */}
        <div className="block bg-white rounded-lg shadow-md p-6 border border-dashed border-gray-300 text-center">
          <h2 className="text-lg text-gray-500 font-medium">More coming soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default CoursesMain;
