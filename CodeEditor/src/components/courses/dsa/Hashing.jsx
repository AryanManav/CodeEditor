import React from 'react';

const Hashing = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Hashing in DSA</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Hashing is a technique used to map data of arbitrary size to data of fixed size using hash functions. It allows for fast insertion, deletion, and lookup operations.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">HashMap in Java</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 2);
map.put("banana", 3);

System.out.println(map.get("apple")); // Output: 2`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Common Use Cases</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-4">
        <li>Counting frequencies</li>
        <li>Checking for duplicates</li>
        <li>Finding pairs with given sum</li>
        <li>Implementing sets/maps</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Example: Frequency Count</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto">
        <code>{`int[] nums = {1, 2, 2, 3, 1};
HashMap<Integer, Integer> freq = new HashMap<>();

for (int num : nums) {
    freq.put(num, freq.getOrDefault(num, 0) + 1);
}

System.out.println(freq); // Output: {1=2, 2=2, 3=1}`}</code>
      </pre>

      <p className="text-gray-700 dark:text-gray-300">
        Hashing provides an average-case time complexity of O(1) for insert, delete, and search operations, making it a key technique in competitive coding and interviews.
      </p>
    </div>
  );
};

export default Hashing;
