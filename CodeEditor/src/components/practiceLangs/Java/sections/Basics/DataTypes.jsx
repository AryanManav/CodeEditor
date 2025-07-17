import React from 'react';

const DataTypes = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-gray-800">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Java Data Types</h1>

      <p className="mb-4">
        In Java, data types specify the size and type of values that can be stored in a variable.
        Java is a statically-typed language, which means all variables must be declared with a data type.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Types of Data Types</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Primitive Data Types</strong>: byte, short, int, long, float, double, char, boolean</li>
        <li><strong>Non-Primitive Data Types</strong>: String, Arrays, Classes, Interfaces, etc.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Primitive Data Types</h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-6">
        <table className="w-full text-left border">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-2 border">Data Type</th>
              <th className="p-2 border">Size</th>
              <th className="p-2 border">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">byte</td>
              <td className="p-2 border">1 byte</td>
              <td className="p-2 border">byte a = 100;</td>
            </tr>
            <tr>
              <td className="p-2 border">int</td>
              <td className="p-2 border">4 bytes</td>
              <td className="p-2 border">int x = 5000;</td>
            </tr>
            <tr>
              <td className="p-2 border">float</td>
              <td className="p-2 border">4 bytes</td>
              <td className="p-2 border">float pi = 3.14f;</td>
            </tr>
            <tr>
              <td className="p-2 border">char</td>
              <td className="p-2 border">2 bytes</td>
              <td className="p-2 border">char grade = 'A';</td>
            </tr>
            <tr>
              <td className="p-2 border">boolean</td>
              <td className="p-2 border">1 bit</td>
              <td className="p-2 border">boolean isJavaFun = true;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. Non-Primitive Data Types</h2>
      <p className="mb-4">
        Non-primitive data types are created by the programmer and are used to store multiple values or complex data.
      </p>
      <ul className="list-disc pl-6">
        <li><strong>String:</strong> A sequence of characters.</li>
        <li><strong>Array:</strong> A container object that holds a fixed number of values of a single type.</li>
        <li><strong>Class:</strong> A blueprint for objects.</li>
      </ul>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-700 mb-2 font-semibold">Example:</p>
        <pre className="bg-white p-3 rounded text-sm overflow-auto">
{`String name = "Aryan";
int[] marks = {85, 90, 95};
class Student {
  String name;
  int age;
}`}
        </pre>
      </div>
    </div>
  );
};

export default DataTypes;
