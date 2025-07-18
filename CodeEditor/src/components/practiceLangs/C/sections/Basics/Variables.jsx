import React from 'react';

const Variables = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">C Variables</h1>

      <p className="mb-4">
        In C, variables are containers for storing data values. Every variable must be declared with a specific data type before use.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>int</strong> – Integer (e.g., <code>int age = 20;</code>)</li>
        <li><strong>float</strong> – Floating-point number (e.g., <code>float pi = 3.14;</code>)</li>
        <li><strong>char</strong> – Character (e.g., <code>char grade = 'A';</code>)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Example:</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`#include <stdio.h>

int main() {
    int age = 20;
    float pi = 3.14;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Pi: %f\\n", pi);
    printf("Grade: %c\\n", grade);
    return 0;
}`}
        </code>
      </pre>

      <p>
        In C, you must declare a variable with its type before using it. Uninitialized variables may contain garbage values.
      </p>
    </div>
  );
};

export default Variables;
