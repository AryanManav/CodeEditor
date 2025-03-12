import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, logout, isLoading, error } = useAuth0();

  // Debugging
  console.log({ isAuthenticated, user, isLoading, error });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <nav>
        <NavLink to="/">
          <div className="left">CodeMaster</div>
        </NavLink>

        <div className="right">
          <NavLink to="/"><ul>Home</ul></NavLink>
          <NavLink to="/playground"><ul>Playground</ul></NavLink>
          <NavLink to="/practice"><ul>Practice</ul></NavLink>

          {isAuthenticated && user ? (
            <>
              <ul className="user">{user.name?.toUpperCase()}</ul>
              <button
                className="btn"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Logout
              </button>
            </>
          ) : (
            <button className="btn" onClick={loginWithRedirect}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
