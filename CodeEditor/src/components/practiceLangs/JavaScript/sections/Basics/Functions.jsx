import React from 'react';

const Functions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        JavaScript Functions
      </h1>

      <p className="mb-4">
        Functions in JavaScript are reusable blocks of code designed to perform a particular task. They are one of the fundamental building blocks in JS.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Function Declaration</strong> – Traditional function definition using the <code>function</code> keyword.
        </li>
        <li>
          <strong>Function Expression</strong> – A function assigned to a variable.
        </li>
        <li>
          <strong>Arrow Functions</strong> – A concise syntax introduced in ES6 using <code>=&gt;</code>.
        </li>
        <li>
          <strong>Anonymous Functions</strong> – Functions without a name, often used as arguments.
        </li>
        <li>
          <strong>Callback Functions</strong> – Functions passed as arguments to be executed later.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Example:</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">
{`// Function Declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrow Function
const square = (n) => n * n;

// Calling the functions
console.log(greet('Aryan'));  // Hello, Aryan!
console.log(square(5));       // 25`}
        </code>
      </pre>

      <p>
        Functions can be nested, passed as arguments, and even returned from other functions, making JavaScript highly flexible.
      </p>
    </div>
  );
};

export default Functions;
