import React from 'react';

const Inheritance = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-gray-800">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Java Inheritance</h1>

      <p className="mb-4">
        Inheritance is one of the fundamental features of Object-Oriented Programming (OOP). It allows a class (child) to inherit fields and methods from another class (parent).
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Use Inheritance?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To promote code reusability.</li>
        <li>To establish a natural hierarchy between classes.</li>
        <li>To extend or modify existing functionality.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">Example:</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="bg-white p-3 rounded text-sm overflow-auto">
{`// Parent class
class Animal {
  void makeSound() {
    System.out.println("Animal sound");
  }
}

// Child class
class Dog extends Animal {
  void bark() {
    System.out.println("Dog barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.makeSound(); // inherited method
    d.bark();      // child method
  }
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">Types of Inheritance in Java:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Single Inheritance</li>
        <li>Multilevel Inheritance</li>
        <li>Hierarchical Inheritance</li>
      </ul>

      <div className="text-sm text-gray-600">
        <p className="italic">
          Note: Java does not support multiple inheritance with classes to avoid ambiguity. Interfaces are used for that purpose.
        </p>
      </div>
    </div>
  );
};

export default Inheritance;
