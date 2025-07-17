import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/top_bottom/Navbar.jsx';
import Footer from './components/top_bottom/Footer.jsx';

import Home from './components/Home';
import PlayGround from './components/PlayGround';

// Java
import JavaMain from './components/practiceLangs/Java/index.jsx';
import IntroToJava from './components/practiceLangs/Java/sections/Basics/IntroToJava.jsx';
import Variables from './components/practiceLangs/Java/sections/Basics/Variables.jsx';
import DataTypes from './components/practiceLangs/Java/sections/Basics/DataTypes.jsx';
import ClassesAndObjects from './components/practiceLangs/Java/sections/OOPs/ClassesAndObjects.jsx';
import Inheritance from './components/practiceLangs/Java/sections/OOPs/Inheritance.jsx';

// Python
import PythonMain from './components/practiceLangs/Python/index.jsx';
import IntroToPython from './components/practiceLangs/Python/sections/Basics/IntroToPython.jsx';
import VariablesPython from './components/practiceLangs/Python/sections/Basics/Variables.jsx';
import DataTypesPython from './components/practiceLangs/Python/sections/Basics/DataTypes.jsx';
import FunctionsPython from './components/practiceLangs/Python/sections/Functions/Functions.jsx';
// C++
import CppMain from './components/practiceLangs/Cpp/index.jsx';
import IntroToCpp from './components/practiceLangs/Cpp/sections/Basics/IntroToCpp.jsx';
import VariablesCpp from './components/practiceLangs/Cpp/sections/Basics/Variables.jsx';
import DataTypesCpp from './components/practiceLangs/Cpp/sections/Basics/DataTypes.jsx';
import OOPsCpp from './components/practiceLangs/Cpp/sections/OOPs/ClassesAndObjects.jsx';

// C
import CMain from './components/practiceLangs/C/index.jsx';
import IntroToC from './components/practiceLangs/C/sections/Basics/IntroToC.jsx';
import VariablesC from './components/practiceLangs/C/sections/Basics/Variables.jsx';
import DataTypesC from './components/practiceLangs/C/sections/Basics/DataTypes.jsx';
import FunctionsC from './components/practiceLangs/C/sections/Basics/Functions.jsx';

// JavaScript
import JavaScriptMain from './components/practiceLangs/JavaScript/index.jsx';
import IntroToJS from './components/practiceLangs/JavaScript/sections/Basics/IntroToJS.jsx';
import VariablesJS from './components/practiceLangs/JavaScript/sections/Basics/Variables.jsx';
import DataTypesJS from './components/practiceLangs/JavaScript/sections/Basics/DataTypes.jsx';
import FunctionsJS from './components/practiceLangs/JavaScript/sections/Basics/Functions.jsx';
import ClassesJS from './components/practiceLangs/JavaScript/sections/OOPs/ClassesAndObjects.jsx';


// Courses
import CoursesMain from './components/courses/CoursesMain.jsx';
import DSACourse from './components/courses/dsa/DSACourse.jsx';
import WebDevelopment from './components/courses/webd/WebDevelopment.jsx';
import Array from './components/courses/dsa/Array.jsx';
import Hashing from './components/courses/dsa/Hashing.jsx';
import HTML from './components/courses/webd/HTML.jsx';
import CSS from './components/courses/webd/CSS.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'playground', element: <PlayGround /> },
      {
        path: 'dsa-course',
        element: <DSACourse />,
        children: [
          { path: 'array', element: <Array /> },
          { path: 'hashing', element: <Hashing /> },
        ],
      },
      {
        path: 'web-development',
        element: <WebDevelopment />,
        children: [
          { path: 'html', element: <HTML /> },
          { path: 'css', element: <CSS /> },
        ],
      },
      { path: 'courses', element: <CoursesMain /> },

      {
        path: 'java',
        element: <JavaMain />,
        children: [
          { path: 'basics/intro', element: <IntroToJava /> },
          { path: 'basics/variables', element: <Variables /> },
          { path: 'basics/datatypes', element: <DataTypes /> },
          { path: 'oops/classes-and-objects', element: <ClassesAndObjects /> },
          { path: 'oops/inheritance', element: <Inheritance /> },
        ]
      },
      {
        path: 'python',
        element: <PythonMain />,
        children: [
          { path: 'basics/intro', element: <IntroToPython /> },
          { path: 'basics/variables', element: <VariablesPython /> },
          { path: 'basics/datatypes', element: <DataTypesPython /> },
          { path: 'functions/functions', element: <FunctionsPython /> },
        ]
      },
      {
        path: 'cpp',
        element: <CppMain />,
        children: [
          { path: 'basics/intro', element: <IntroToCpp /> },
          { path: 'basics/variables', element: <VariablesCpp /> },
          { path: 'basics/datatypes', element: <DataTypesCpp /> },
          { path: 'oops/classes-and-objects', element: <OOPsCpp /> },
        ]
      },
      {
        path: 'c',
        element: <CMain />,
        children: [
          { path: 'basics/intro', element: <IntroToC /> },
          { path: 'basics/variables', element: <VariablesC /> },
          { path: 'basics/datatypes', element: <DataTypesC /> },
          { path: 'basics/functions', element: <FunctionsC /> },
        ]
      },
      {
        path: 'javascript',
        element: <JavaScriptMain />,
        children: [
          { path: 'basics/intro', element: <IntroToJS /> },
          { path: 'basics/variables', element: <VariablesJS /> },
          { path: 'basics/datatypes', element: <DataTypesJS /> },
          { path: 'basics/functions', element: <FunctionsJS /> },
          { path: 'oops/classes-and-objects', element: <ClassesJS /> },
        ]
      }


    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
