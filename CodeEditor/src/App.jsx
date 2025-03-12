import './App.css'
import { useState, useRef, useEffect } from 'react'
import PlayGround from './components/PlayGround'
import Navbar from './components/Navbar'
import Practice from './components/Practice'
import Footer from './components/Footer'
import User from './components/User'
import Python from './components/practiceLangs/Python';
import Java from './components/practiceLangs/Java';
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/practice",
      element: <><Navbar/><Practice/></>
    },
    {
      path:"/playground",
      element: <><Navbar/><PlayGround/></>
    },
    {
      path: "/learnjava",
      element: <><Navbar/><Java/></>
    },
    {
      path:"/learnpython",
      element: <><Navbar/><Python/></>
    },
    // {
    //   path:"/user/:username",
    //   element: <><Navbar/><User/></>
    // }
  ])
  
  return (
    <>
    <RouterProvider router={router}/>
    {/* <Navbar /> */}
      {/* <PlayGround/> */}
    <Footer />
    </>
  )
}

export default App
