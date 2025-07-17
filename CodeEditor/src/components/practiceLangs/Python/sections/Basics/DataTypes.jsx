import React from 'react';

const DataTypes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Python Data Types</h1>

      <p className="text-gray-700 mb-4">
        In Python, everything is an object, and each object has a data type. Commonly used data types include:
      </p>

      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li><strong>int</strong> – Integer numbers (e.g., <code>5, -10</code>)</li>
        <li><strong>float</strong> – Floating-point numbers (e.g., <code>3.14</code>)</li>
        <li><strong>str</strong> – Strings of text (e.g., <code>"Hello"</code>)</li>
        <li><strong>bool</strong> – Boolean values (<code>True</code> or <code>False</code>)</li>
        <li><strong>list</strong> – Ordered, mutable collection (e.g., <code>[1, 2, 3]</code>)</li>
        <li><strong>tuple</strong> – Ordered, immutable collection (e.g., <code>(1, 2)</code>)</li>
        <li><strong>dict</strong> – Key-value pairs (e.g., <code>"name": "Aryan"</code>)</li>
        <li><strong>set</strong> – Unordered collection of unique items (e.g., <code>1, 2, 3</code>)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`x = 10            # int
pi = 3.14         # float
name = "Aryan"    # str
is_valid = True   # bool
items = [1, 2, 3] # list
info = {"age": 20, "city": "Delhi"} # dict`}
        </code>
      </pre>

      <p className="text-gray-700">
        Python is dynamically typed, so you don't need to declare the data type explicitly.
      </p>
    </div>
  );
};

export default DataTypes;
