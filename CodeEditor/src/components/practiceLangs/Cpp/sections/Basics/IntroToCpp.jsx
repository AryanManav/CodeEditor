import React from 'react';

const IntroToCpp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Introduction to C++</h1>
      
      <p className="mb-4">
        C++ is a general-purpose programming language developed by Bjarne Stroustrup as an extension of the C programming language.
        It supports both procedural and object-oriented programming, making it one of the most versatile and powerful languages used today.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Key Features</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Object-Oriented Programming (OOP) support</li>
        <li>Low-level memory manipulation</li>
        <li>Strong type checking</li>
        <li>Rich standard library</li>
        <li>Fast and efficient execution</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Hello World Example</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}
        </code>
      </pre>

      <p>
        This program includes the <code>iostream</code> library, which allows you to output data using <code>cout</code>. 
        The <code>main</code> function is the entry point of every C++ program.
      </p>
    </div>
  );
};

export default IntroToCpp;
