import React from 'react';

const DataTypes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">C Data Types</h1>

      <p className="mb-4">
        In C, data types specify the type of data that a variable can store. Some commonly used data types are:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>int</strong> – Integer numbers (e.g., <code>5, -10</code>)</li>
        <li><strong>float</strong> – Single-precision floating point (e.g., <code>3.14</code>)</li>
        <li><strong>double</strong> – Double-precision floating point</li>
        <li><strong>char</strong> – Single character (e.g., <code>'A'</code>)</li>
        <li><strong>void</strong> – Represents no value (used with functions)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Derived & User-defined Types:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Array</strong> – Collection of similar data types</li>
        <li><strong>Pointer</strong> – Stores the address of another variable</li>
        <li><strong>Structure</strong> – Groups variables of different types</li>
        <li><strong>Union</strong> – Similar to structure but uses shared memory</li>
        <li><strong>Enum</strong> – User-defined named constants</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Example:</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`#include <stdio.h>

int main() {
    int age = 20;
    float pi = 3.14;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("PI: %.2f\\n", pi);
    printf("Grade: %c\\n", grade);

    return 0;
}`}
        </code>
      </pre>

      <p>
        C is a statically typed language, so data types must be explicitly declared.
      </p>
    </div>
  );
};

export default DataTypes;
