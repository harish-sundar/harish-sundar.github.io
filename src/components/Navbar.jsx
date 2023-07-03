import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../images/logo_icon.png';

const NavbarSection = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <section className= "navbar">
    <header className='header'>
      <img src={logo} alt="Harish Sundar" className='logo' />
      <nav ref={navRef} className={isNavOpen ? 'responsive_nav' : ''}>
        <Link to="home" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
          Home
        </Link>
        <Link to="education" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
          Education
        </Link>
        <Link to="experience" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
          Experience
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
          Projects
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
          Skills
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
          Contact
        </Link>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
    </section>
  );
};

export default NavbarSection;
