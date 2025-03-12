import React from 'react';
import './Practice.css';
import { NavLink } from 'react-router-dom';

const Practice = () => {
  return (
    <>
      <div className="prac">
        <div className="pracupper">
          <h1 className='phead'>Upgrade your skills!!!</h1>
          <p className="pabt">
            Practice over 5000+ problems in coding languages like Python, Java, JavaScript, C++, SQL, and HTML.
            Start with beginner-friendly problems and solve hard problems as you become better.
          </p>
        </div>
        
        <div className="praclower">
          <h1 className='plhead'>Choose your Language</h1>
          <div className="langs">
            <NavLink to='/learnjava'>
              <section className='praclang'>
                <img className='imagelang' src="../../public/java.png" alt="Java" />
                <p className='praclangname'>JAVA</p>
              </section>
            </NavLink>

            <NavLink to='/learnpython'>
              <section className='praclang'>
                <img className='imagelang' src="../../public/python.png" alt="Python" />
                <p className='praclangname'>PYTHON</p>
              </section>
            </NavLink>

          </div>
        </div>
        
        <div className="extra-content">
          <h1 className='section-title'>Explore More</h1>
          <div className="features">
            <section className='feature'>
              <h2>Code Challenges & Contests</h2>
              <p>Take part in daily challenges, coding competitions, and leaderboards.</p>
            </section>
            
            <section className='feature'>
              <h2>Interactive Tutorials</h2>
              <p>Follow structured learning paths with hands-on exercises and quizzes.</p>
            </section>
            
            <section className='feature'>
              <h2>Project-Based Learning</h2>
              <p>Build real-world projects and showcase them in your portfolio.</p>
            </section>
            
            <section className='feature'>
              <h2>Online Code Editor</h2>
              <p>Write, test, and run your code directly in the browser with syntax highlighting and auto-completion.</p>
            </section>
            
            <section className='feature'>
              <h2>Collaboration & Community</h2>
              <p>Join discussions, pair program, and share your solutions with the community.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;