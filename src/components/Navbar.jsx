import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav className={`navbar ${isNavOpen ? 'responsive_nav' : ''}`}>
        <a href="/#home">Home</a>
        <a href="/#education2">Education</a>
        <a href="/#experience">Experience</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavbarSection;
