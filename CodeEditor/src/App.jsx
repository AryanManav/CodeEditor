import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Practice from './components/Practice';
import PlayGround from './components/PlayGround';
import Python from './components/practiceLangs/Python';
import Java from './components/practiceLangs/Java';
import Courses from './components/Courses.jsx';
import Roadmaps from './components/Roadmaps.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <><Navbar /><Home /></> },
    { path: "/practice", element: <><Navbar /><Practice /></> },
    { path: "/playground", element: <><Navbar /><PlayGround /></> },
    { path: "/learnjava", element: <><Navbar /><Java /></> },
    { path: "/learnpython", element: <><Navbar /><Python /></> },
    { path: "/courses", element: <><Navbar /><Courses /></> },
    { path: "/roadmaps", element: <><Navbar /><Roadmaps /></> },
    { path: "/blog", element: <><Navbar /><Blog /></> },
    { path: "/contact", element: <><Navbar /><Contact /></> },
    { path: "/faq", element: <><Navbar /><FAQ /></> }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;