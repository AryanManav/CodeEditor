import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-container">
      <h1 className="courses-title">Explore Our Courses</h1>
      <p className="courses-description">
        Enhance your coding skills with expert-led courses in Python, Java, JavaScript, C++, SQL, and more.
        Choose from beginner to advanced levels and build real-world projects.
      </p>
      <div className="courses-list">
        <div className="course-card">
          <h2>Python for Beginners</h2>
          <p>Learn the fundamentals of Python and start coding with ease.</p>
        </div>
        <div className="course-card">
          <h2>Mastering Java</h2>
          <p>Deep dive into Java and develop robust applications.</p>
        </div>
        <div className="course-card">
          <h2>Full-Stack Web Development</h2>
          <p>Build and deploy dynamic web applications using MERN stack.</p>
        </div>
        <div className="course-card">
          <h2>Data Structures & Algorithms</h2>
          <p>Boost your problem-solving skills with structured learning.</p>
        </div>
        <div className="course-card">
          <h2>SQL & Database Management</h2>
          <p>Master SQL and database optimization techniques.</p>
        </div>
        <div className="course-card">
          <h2>JavaScript & Frontend Mastery</h2>
          <p>Learn modern JavaScript frameworks and build stunning UIs.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;