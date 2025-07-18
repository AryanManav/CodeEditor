import React from 'react';

const HTML = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">HTML Tutorial</h1>

      <p className="text-gray-700 dark:text-gray-200 mb-4">
        HTML (HyperText Markup Language) is the backbone of all web pages. It defines the structure of a web page and is used to organize content using elements like headings, paragraphs, images, links, and more.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-6 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-100 dark:bg-zinc-700 text-sm p-4 rounded-md overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-6 mb-2">Common Tags</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
        <li><code>&lt;h1&gt; to &lt;h6&gt;</code> — Headings</li>
        <li><code>&lt;p&gt;</code> — Paragraphs</li>
        <li><code>&lt;a href="..."&gt;</code> — Links</li>
        <li><code>&lt;img src="..." /&gt;</code> — Images</li>
        <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> — Lists</li>
        <li><code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> — Containers</li>
      </ul>

      <p className="mt-6 text-gray-600 dark:text-gray-300">
        HTML is the starting point for learning Web Development. Once you're familiar with its basics, you can move on to styling with CSS and interactivity with JavaScript.
      </p>
    </div>
  );
};

export default HTML;
