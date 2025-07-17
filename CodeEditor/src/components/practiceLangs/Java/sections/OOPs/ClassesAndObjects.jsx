import React from 'react';

const ClassesAndObjects = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-gray-800">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Java Classes & Objects</h1>

      <p className="mb-4">
        In Java, <strong>classes</strong> and <strong>objects</strong> are the building blocks of object-oriented programming (OOP).
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">What is a Class?</h2>
      <p className="mb-4">
        A class is a blueprint for creating objects. It defines properties (fields) and behaviors (methods).
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">Class Syntax:</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="bg-white p-3 rounded text-sm overflow-auto">
{`public class Car {
  String color;
  int speed;

  void drive() {
    System.out.println("Car is driving");
  }
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">What is an Object?</h2>
      <p className="mb-4">
        An object is an instance of a class. It is created using the <code>new</code> keyword.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">Creating Objects:</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <pre className="bg-white p-3 rounded text-sm overflow-auto">
{`public class Main {
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.color = "Red";
    myCar.speed = 100;
    myCar.drive();
  }
}`}
        </pre>
      </div>

      <p className="mb-2">
        Here, <code>myCar</code> is an object of the class <code>Car</code>. It has its own <code>color</code> and <code>speed</code> values.
      </p>
    </div>
  );
};

export default ClassesAndObjects;
