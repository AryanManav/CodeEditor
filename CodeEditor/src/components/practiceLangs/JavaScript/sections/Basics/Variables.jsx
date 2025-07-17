import React from 'react';

const Variables = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">JavaScript Variables</h1>

      <p className="text-gray-700 mb-4">
        JavaScript provides three ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>.
      </p>

      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li><strong>var</strong> – Function scoped, can be re-declared and updated.</li>
        <li><strong>let</strong> – Block scoped, can be updated but not re-declared in the same scope.</li>
        <li><strong>const</strong> – Block scoped, cannot be updated or re-declared.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>
{`var name = "Aryan";
let age = 20;
const pi = 3.14;

console.log(name); // Aryan
console.log(age);  // 20
console.log(pi);   // 3.14`}
        </code>
      </pre>

      <p className="text-gray-700">
        Prefer using <code>let</code> and <code>const</code> in modern JavaScript. <code>var</code> is mostly used in legacy code.
      </p>
    </div>
  );
};

export default Variables;
