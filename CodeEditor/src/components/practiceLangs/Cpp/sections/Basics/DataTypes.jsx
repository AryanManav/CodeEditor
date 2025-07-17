import React from 'react';

const DataTypes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">C++ Data Types</h1>
      <p className="mb-4 text-gray-700">
        In C++, data types specify the type of data that a variable can hold. C++ supports several built-in data types.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Primary Data Types</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>int</strong> – Integer values (e.g., <code>int x = 10;</code>)</li>
        <li><strong>float</strong> – Floating-point numbers (e.g., <code>float pi = 3.14;</code>)</li>
        <li><strong>double</strong> – Double-precision floating-point numbers</li>
        <li><strong>char</strong> – Single character (e.g., <code>char grade = 'A';</code>)</li>
        <li><strong>bool</strong> – Boolean values (true/false)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Modifiers</h2>
      <p className="mb-4 text-gray-700">
        Modifiers alter the meaning of the basic data types to serve a specific purpose:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>signed</strong>, <strong>unsigned</strong></li>
        <li><strong>short</strong>, <strong>long</strong></li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example Code</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>
{`#include <iostream>
using namespace std;

int main() {
    int age = 21;
    float pi = 3.14;
    char grade = 'A';
    bool isPass = true;

    cout << "Age: " << age << endl;
    cout << "Pi: " << pi << endl;
    cout << "Grade: " << grade << endl;
    cout << "Passed: " << isPass << endl;

    return 0;
}`}
        </code>
      </pre>

      <p className="text-gray-700">
        Understanding data types is crucial because C++ is a statically typed language, which means you must declare the type of variables before using them.
      </p>
    </div>
  );
};

export default DataTypes;
