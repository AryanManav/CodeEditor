import React from 'react';

const ClassesAndObjects = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        C++ Classes & Objects
      </h1>

      <p className="mb-4">
        In C++, a class is a blueprint for creating objects. It can contain data members and member functions to define its behavior.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Defining a Class</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`class Student {
public:
    string name;
    int age;

    void introduce() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Creating Objects</h2>
      <pre className="bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded mb-4 overflow-x-auto text-gray-800 dark:text-gray-100">
        <code>
{`int main() {
    Student s1;
    s1.name = "Aryan";
    s1.age = 20;
    s1.introduce();
    return 0;
}`}
        </code>
      </pre>

      <p>
        In the above example, we define a class <code>Student</code> with two data members and one method.
        We then create an object <code>s1</code> and call its method.
      </p>
    </div>
  );
};

export default ClassesAndObjects;
