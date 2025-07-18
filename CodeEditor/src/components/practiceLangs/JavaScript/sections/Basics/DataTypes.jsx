import React from 'react';

const DataTypes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        JavaScript Data Types
      </h1>

      <p className="mb-4">
        JavaScript has dynamic typing, meaning variables can hold any type of value. It includes both primitive and non-primitive data types.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Primitive Types:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Number</strong> – Integer or floating point (e.g., <code>5, 3.14</code>)
        </li>
        <li>
          <strong>String</strong> – Textual data (e.g., <code>"Hello"</code>)
        </li>
        <li>
          <strong>Boolean</strong> – <code>true</code> or <code>false</code>
        </li>
        <li>
          <strong>Undefined</strong> – Variable declared but not assigned a value
        </li>
        <li>
          <strong>Null</strong> – Represents intentional absence of value
        </li>
        <li>
          <strong>Symbol</strong> – Unique and immutable identifier
        </li>
        <li>
          <strong>BigInt</strong> – Arbitrary-precision integers
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Non-Primitive Types:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Object</strong> – Collection of key-value pairs</li>
        <li><strong>Array</strong> – Ordered list of values</li>
        <li><strong>Function</strong> – Reusable block of code</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Example:</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">
{`let name = "Aryan";        // String
let age = 21;              // Number
let isStudent = true;      // Boolean
let score = null;          // Null
let value;                 // Undefined
let big = 123456789012345678901234567890n; // BigInt
let sym = Symbol("id");    // Symbol

let person = { name: "Aryan", age: 21 }; // Object
let numbers = [1, 2, 3];                 // Array
function greet() { console.log("Hello!"); } // Function`}
        </code>
      </pre>

      <p>
        JavaScript is loosely typed, so variables can be reassigned with different data types at runtime.
      </p>
    </div>
  );
};

export default DataTypes;
