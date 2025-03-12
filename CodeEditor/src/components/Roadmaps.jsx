import React from 'react';
import './Roadmaps.css';

const RoadmapSection = ({ title, steps }) => (
  <div className="roadmap-section">
    <h2 className="roadmap-section-title">{title}</h2>
    <div className="roadmaps-path">
      <div className="roadmap-node start">Start</div>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="roadmap-line"></div>
          <div className="roadmap-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </React.Fragment>
      ))}
      <div className="roadmap-line"></div>
      <div className="roadmap-node end">Finish</div>
    </div>
  </div>
);

const Roadmaps = () => {
  const roadmaps = [
    {
      title: 'Frontend Development',
      steps: [
        { title: 'HTML & CSS', description: 'Learn the building blocks of web design.' },
        { title: 'JavaScript', description: 'Master ES6+ and DOM manipulation.' },
        { title: 'React & Modern UI', description: 'Work with React, Tailwind, and UI frameworks.' },
      ],
    },
    {
      title: 'Backend Development',
      steps: [
        { title: 'Node.js & Express', description: 'Understand backend fundamentals.' },
        { title: 'Databases', description: 'Learn SQL & NoSQL databases.' },
        { title: 'API Development', description: 'Build RESTful and GraphQL APIs.' },
      ],
    },
    {
      title: 'Data Science & AI',
      steps: [
        { title: 'Python & Libraries', description: 'Master NumPy, Pandas, Matplotlib.' },
        { title: 'Machine Learning', description: 'Understand supervised & unsupervised learning.' },
        { title: 'Deep Learning', description: 'Work with TensorFlow & PyTorch.' },
      ],
    },
  ];

  return (
    <div className="roadmaps-container">
      <h1 className="roadmaps-title">Structured Roadmaps for Different Fields</h1>
      <p className="roadmaps-description">
        Follow step-by-step guides to master different technologies.
      </p>
      {roadmaps.map((roadmap, index) => (
        <RoadmapSection key={index} title={roadmap.title} steps={roadmap.steps} />
      ))}
    </div>
  );
};

export default Roadmaps;
