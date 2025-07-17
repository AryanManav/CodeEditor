import React from 'react';

const Variables = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Python Variables</h1>

      <p className="text-gray-700 mb-4">
        Variables in Python are used to store data. Python is dynamically typed, so you don’t need to declare the data type explicitly.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Declaring Variables</h2>
      <p className="text-gray-700 mb-4">You can directly assign a value to a variable like this:</p>

      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`x = 10
name = "Aryan"
pi = 3.14
is_active = True`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Variable Naming Rules</h2>
      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li>Names can contain letters, numbers, and underscores</li>
        <li>Must begin with a letter or underscore (not a number)</li>
        <li>Case-sensitive (<code>myVar</code> and <code>myvar</code> are different)</li>
        <li>Cannot be a Python keyword (like <code>if</code>, <code>while</code>, <code>class</code>)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Multiple Assignments</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`a, b, c = 1, 2, 3
x = y = z = 100`}</code>
      </pre>

      <p className="text-gray-700">
        Python variables are references to objects stored in memory. You can reassign variables to new values or types at any time.
      </p>
    </div>
  );
};

export default Variables;
