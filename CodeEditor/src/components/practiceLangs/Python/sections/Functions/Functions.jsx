import React from 'react';

const Functions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Python Functions</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Functions are reusable blocks of code that perform a specific task. They help break programs into smaller, manageable pieces.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Defining a Function</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Use the <code className="bg-gray-200 dark:bg-zinc-700 px-1 rounded">def</code> keyword to define a function:
      </p>

      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">{`def greet():
    print("Hello, world!")`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Calling a Function</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">{`greet()`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Functions with Parameters</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">{`def greet_user(name):
    print(f"Hello, {name}!")

greet_user("Aryan")`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Return Values</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-100">{`def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8`}</code>
      </pre>

      <p className="text-gray-700 dark:text-gray-300">
        Functions can also have default parameters, variable-length arguments, and be nested inside other functions.
      </p>
    </div>
  );
};

export default Functions;
