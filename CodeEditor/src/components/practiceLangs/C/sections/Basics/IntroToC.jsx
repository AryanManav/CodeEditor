import React from 'react';

const IntroToC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Introduction to C</h1>

      <p className="text-gray-700 mb-4">
        C is a powerful, general-purpose programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It is widely used for system programming, writing operating systems, and embedded systems.
      </p>

      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        <li><strong>Procedural Language:</strong> C follows a top-down approach and emphasizes functions and structured programming.</li>
        <li><strong>Low-level Access:</strong> C provides low-level memory access through pointers.</li>
        <li><strong>Portability:</strong> Code written in C can run on various platforms with minimal changes.</li>
        <li><strong>Efficient:</strong> Programs written in C are usually fast and memory-efficient.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Structure of a C Program:</h2>
      <pre className="bg-gray-100 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>
{`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}
        </code>
      </pre>

      <p className="text-gray-700">
        Every C program must have a <code>main()</code> function, which is the entry point of execution. The <code>#include</code> directive is used to include header files, such as <code>stdio.h</code> for standard input/output functions.
      </p>
    </div>
  );
};

export default IntroToC;
