import React from 'react';

const Array = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Arrays in DSA</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        An array is a collection of elements stored at contiguous memory locations. It allows random access of elements using their index.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Declaration and Initialization</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`// Java Example
int[] arr = new int[5];       // Declaration
int[] nums = {1, 2, 3, 4, 5}; // Initialization`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Accessing Elements</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`System.out.println(nums[0]); // Output: 1`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Common Operations</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-4">
        <li>Traversal</li>
        <li>Searching</li>
        <li>Sorting</li>
        <li>Updating</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Example: Find Max Element</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`int max = nums[0];
for (int i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
System.out.println("Max: " + max);`}</code>
      </pre>

      <p className="text-gray-700 dark:text-gray-300">
        Arrays are the foundation for many advanced data structures like stacks, queues, and heaps.
      </p>
    </div>
  );
};

export default Array;
