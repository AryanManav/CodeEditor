import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="homecont">
      {/* Upper Section */}
      <div className='upperhome'>
        <div className="ulefthome">
          <img src="https://i.morioh.com/210625/5583e165.webp" alt="CodeMaster" className='uimage' />
        </div>
        <div className="urighthome">
          <h1 className="uhead">A NEW WAY TO LEARN</h1>
          <p className="uabt">CodeMaster is the best platform to help you enhance your skills, expand your knowledge, and prepare for technical interviews.</p>
        </div>
      </div>

      {/* Lower Section */}
      <div className='lowerhome'>
        <div className="llefthome">
          <img src="https://i.pinimg.com/564x/75/1b/49/751b494eedb8960206aaa5a5dd053627.jpg" alt="CodeMaster" className='limage' />
        </div>
        <div className="lrighthome">
          <h1 className="lhead">START EXPLORING</h1>
          <p className="labt">Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h1 className="fhead">WHY CHOOSE CODEMASTER?</h1>
        <div className="feature-list">
          <div className="feature-item">
            <h2>Real-time Collaboration</h2>
            <p>Work on code with your team simultaneously with our live collaboration feature.</p>
          </div>
          <div className="feature-item">
            <h2>Code Execution</h2>
            <p>Run code directly in the browser with support for multiple programming languages.</p>
          </div>
          <div className="feature-item">
            <h2>Intelligent Code Suggestions</h2>
            <p>Get AI-powered code completion and debugging to enhance your coding experience.</p>
          </div>
          <div className="feature-item">
            <h2>Custom Themes</h2>
            <p>Personalize your coding environment with a variety of themes and layouts.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h1 className="thead">WHAT OUR USERS SAY</h1>
        <div className="testimonial-item">
          <p>"CodeMaster has completely changed the way I code. The real-time collaboration feature is a game changer!"</p>
          <h3>- Alex Johnson</h3>
        </div>
        <div className="testimonial-item">
          <p>"I love how intuitive the UI is. The AI-powered code suggestions make writing code so much faster!"</p>
          <h3>- Sarah Lee</h3>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h1 className="cta-head">READY TO CODE?</h1>
        <p>Join thousands of developers coding smarter, faster, and better with CodeMaster.</p>
        <Link to="/playground">
        <button className="cta-btn">Start Coding Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
