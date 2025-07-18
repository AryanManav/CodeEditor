import React from 'react';

const Variables = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        Java Variables
      </h1>

      <p className="mb-4">
        Variables are containers for storing data values. In Java, each variable must be declared with a data type.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Declaring Variables</h2>
      <p className="mb-2">Syntax:</p>

      <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
        <pre className="bg-white dark:bg-zinc-900 p-3 rounded text-sm overflow-auto text-gray-800 dark:text-gray-100">
{`dataType variableName = value;`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>
      <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
        <pre className="bg-white dark:bg-zinc-900 p-3 rounded text-sm overflow-auto text-gray-800 dark:text-gray-100">
{`int age = 20;
String name = "Alice";
float pi = 3.14f;
boolean isJavaFun = true;`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Types of Variables</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Local Variables:</strong> Declared inside a method or constructor
        </li>
        <li>
          <strong>Instance Variables:</strong> Declared inside a class but outside any method
        </li>
        <li>
          <strong>Static Variables:</strong> Declared with the <code>static</code> keyword, shared among all instances
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Variable Naming Rules</h2>
      <ul className="list-disc pl-6">
        <li>Must begin with a letter, underscore (_) or dollar sign ($)</li>
        <li>Cannot begin with a digit</li>
        <li>Case-sensitive and should follow camelCase convention</li>
      </ul>
    </div>
  );
};

export default Variables;
