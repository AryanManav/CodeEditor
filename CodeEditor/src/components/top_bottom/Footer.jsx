import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <NavLink to="/" className="text-3xl font-bold tracking-wide text-black">
              CodeMaster
            </NavLink>
            <p className="mt-3 text-sm text-black/80">
              Your gateway to mastering coding and development skills.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">Explore</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li><NavLink to="/courses" className="hover:underline">Courses</NavLink></li>
              <li><NavLink to="/tutorials" className="hover:underline">Tutorials</NavLink></li>
              <li><NavLink to="/practice" className="hover:underline">Practice Problems</NavLink></li>
              <li><NavLink to="/jobs" className="hover:underline">Job Board</NavLink></li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">Tools</h2>
            <ul className="space-y-2 text-sm text-black/80">
              <li><NavLink to="/playground" className="hover:underline">Code Playground</NavLink></li>
              <li><NavLink to="/compiler" className="hover:underline">Online Compiler</NavLink></li>
              <li><NavLink to="/leaderboard" className="hover:underline">Leaderboard</NavLink></li>
              <li><NavLink to="/profile" className="hover:underline">My Profile</NavLink></li>
            </ul>
          </div>

          {/* Follow & Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">Connect</h2>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaTwitter size={20} />
              </a>
            </div>
            <ul className="space-y-2 text-sm text-black/80">
              <li><NavLink to="/privacy" className="hover:underline">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-purple-600/20" />

        <div className="text-center text-sm text-black/70">
          © {new Date().getFullYear()} CodeMaster™ — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
