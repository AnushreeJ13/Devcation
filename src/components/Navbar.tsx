import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a className="nav-logo" href="#">🦌 DEVCATION <span>DELHI</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#prizes">Prizes</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li>
          <a
            href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;