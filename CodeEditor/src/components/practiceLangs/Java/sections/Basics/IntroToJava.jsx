import React from 'react';

const IntroToJava = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-gray-800">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Introduction to Java</h1>

      <p className="mb-4">
        Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995.
        It is widely used for building enterprise-scale applications, Android apps, and web applications.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Key Features of Java</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Platform Independent:</strong> Write Once, Run Anywhere (WORA)</li>
        <li><strong>Object-Oriented:</strong> Everything is treated as an object</li>
        <li><strong>Secure & Robust:</strong> Offers strong memory management and runtime checking</li>
        <li><strong>Multithreaded:</strong> Can perform multiple tasks simultaneously</li>
        <li><strong>High Performance:</strong> With the help of JIT (Just-In-Time) compiler</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Hello World Program</h2>
      <p className="mb-2">Here's the basic structure of a Java program:</p>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <pre className="bg-white p-3 rounded text-sm overflow-auto">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Java Development Tools</h2>
      <ul className="list-disc pl-6">
        <li><strong>JDK (Java Development Kit):</strong> Contains tools needed to write Java programs</li>
        <li><strong>JRE (Java Runtime Environment):</strong> Required to run Java programs</li>
        <li><strong>JVM (Java Virtual Machine):</strong> Executes Java bytecode on any machine</li>
      </ul>
    </div>
  );
};

export default IntroToJava;
