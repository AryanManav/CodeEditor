import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, logout, isLoading, error } = useAuth0();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="left">CodeMaster</NavLink>

      {/* Menu Items */}
      <div className={`right ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/playground">Playground</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/roadmaps">Roadmaps</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/faq">FAQ</NavLink>

        {/* Auth Buttons */}
        {isAuthenticated && user ? (
          <>
            <div className="user">
              {user.picture ? <img src={user.picture} alt="User" /> : <span>{user.name?.toUpperCase()}</span>}
            </div>
            <button
              className="btn"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </button>
          </>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>Login</button>
        )}
      </div>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
