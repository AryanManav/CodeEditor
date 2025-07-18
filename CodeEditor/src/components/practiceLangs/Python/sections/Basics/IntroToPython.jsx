import React from 'react';

const IntroToPython = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        Introduction to Python
      </h1>

      <p className="mb-4">
        Python is a popular, high-level, interpreted programming language known for its simplicity and readability.
        It is widely used in web development, data science, automation, machine learning, and more.
      </p>

      <p className="mb-4">
        Python emphasizes code readability with its clean syntax and indentation. It supports multiple programming paradigms, including:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Procedural programming</li>
        <li>Object-oriented programming</li>
        <li>Functional programming</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Hello World Example:</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">
          print("Hello, World!")
        </code>
      </pre>

      <p>
        Python files typically have the <code className="bg-gray-200 dark:bg-zinc-700 px-1 rounded">.py</code> extension. You can run a Python script using the command line:
      </p>

      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mt-2 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">
          python filename.py
        </code>
      </pre>
    </div>
  );
};

export default IntroToPython;
