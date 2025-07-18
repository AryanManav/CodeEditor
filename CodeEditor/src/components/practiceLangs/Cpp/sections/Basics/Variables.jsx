import React from 'react';

const Variables = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">C++ Variables</h1>
      
      <p className="mb-4">
        Variables in C++ are used to store data that can be used and modified throughout the program. Each variable must be declared with a specific type before it is used.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Syntax</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>type variableName = value;</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Example</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`#include <iostream>
using namespace std;

int main() {
    int age = 20;
    float height = 5.9;
    char grade = 'A';
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    return 0;
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Common Data Types</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>int</strong> – Stores integers (e.g., 1, -2, 100)</li>
        <li><strong>float</strong> – Stores decimal numbers (e.g., 3.14)</li>
        <li><strong>char</strong> – Stores single characters (e.g., 'A')</li>
        <li><strong>bool</strong> – Stores true or false values</li>
        <li><strong>string</strong> – Stores sequences of characters <span className="text-sm text-gray-600 dark:text-gray-400">(requires <code>#include &lt;string&gt;</code>)</span></li>
      </ul>
    </div>
  );
};

export default Variables;
