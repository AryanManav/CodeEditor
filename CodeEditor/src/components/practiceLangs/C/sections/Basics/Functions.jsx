import React from 'react';

const Functions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Functions in C</h1>

      <p className="text-gray-700 mb-4">
        A function in C is a block of code that performs a specific task. Functions help make programs modular, readable, and reusable.
      </p>

      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li><strong>Function Declaration (Prototype)</strong> – Declaring a function before main() to tell the compiler about it.</li>
        <li><strong>Function Definition</strong> – The actual implementation of the function.</li>
        <li><strong>Function Call</strong> – Invoking the function from <code>main()</code> or another function.</li>
        <li><strong>Return Type</strong> – Specifies what type of value the function returns. Use <code>void</code> if it returns nothing.</li>
        <li><strong>Parameters</strong> – Inputs to the function passed during the call.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>
{`#include <stdio.h>

// Function Declaration
int add(int a, int b);

int main() {
    int sum = add(4, 5);
    printf("Sum: %d", sum);
    return 0;
}

// Function Definition
int add(int a, int b) {
    return a + b;
}`}
        </code>
      </pre>

      <p className="text-gray-700">
        Functions in C can return values and accept parameters, which makes them powerful tools for structuring code efficiently.
      </p>
    </div>
  );
};

export default Functions;
