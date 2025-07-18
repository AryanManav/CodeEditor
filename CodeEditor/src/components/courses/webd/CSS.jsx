import React from 'react';

const CSS = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">CSS Tutorial</h1>

      <p className="text-gray-700 dark:text-gray-200 mb-4">
        CSS (Cascading Style Sheets) is used to style HTML elements. It controls the layout, colors, fonts, and overall appearance of your web pages.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-6 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-md text-sm overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`/* CSS Example */
body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
}

h1 {
  color: purple;
  text-align: center;
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-6 mb-2">Selectors</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
        <li><strong>Element Selector</strong>: <code>h1</code>, <code>p</code></li>
        <li><strong>Class Selector</strong>: <code>.className</code></li>
        <li><strong>ID Selector</strong>: <code>#idName</code></li>
        <li><strong>Universal Selector</strong>: <code>*</code></li>
        <li><strong>Group Selector</strong>: <code>h1, p</code></li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-6 mb-2">Common Properties</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
        <li><code>color</code>, <code>background-color</code></li>
        <li><code>font-size</code>, <code>font-family</code></li>
        <li><code>margin</code>, <code>padding</code></li>
        <li><code>border</code>, <code>box-shadow</code></li>
        <li><code>display</code>, <code>flex</code>, <code>grid</code></li>
      </ul>

      <p className="mt-6 text-gray-600 dark:text-gray-300">
        Mastering CSS is key to building beautiful and responsive websites. Once you're comfortable with the basics, you can dive into Flexbox, Grid, animations, and frameworks like Tailwind CSS.
      </p>
    </div>
  );
};

export default CSS;
