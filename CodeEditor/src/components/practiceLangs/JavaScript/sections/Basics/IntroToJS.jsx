import React from 'react';

const IntroToJS = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Introduction to JavaScript</h1>

      <p className="text-gray-700 mb-4">
        JavaScript is a versatile, high-level, interpreted programming language. It's one of the core technologies of the web, alongside HTML and CSS.
      </p>

      <p className="text-gray-700 mb-4">
        It was originally developed to add interactivity to web pages but has since grown into a powerful, full-featured language used for both frontend and backend development.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Features:</h2>
      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li>Lightweight and interpreted</li>
        <li>First-class functions</li>
        <li>Prototype-based object orientation</li>
        <li>Event-driven and asynchronous programming (via callbacks, promises, async/await)</li>
        <li>Runs in the browser and on servers (Node.js)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>
{`// A simple JS program
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Aryan"));`}
        </code>
      </pre>

      <p className="text-gray-700">
        JavaScript is essential for creating dynamic web applications and is supported by all modern web browsers.
      </p>
    </div>
  );
};

export default IntroToJS;
