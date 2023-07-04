import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../../images/logo_icon.png';
import './Navbar.css';

const NavbarSection = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  const handleSectionVisibility = () => {
    const sectionElements = document.querySelectorAll('section[id]');
    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSectionVisibility);
    return () => {
      window.removeEventListener('scroll', handleSectionVisibility);
    };
  }, []);

  return (
    <section className="navbar">
      <header className='header'>
      <Link to="home" spy={true} smooth={true} offset={50} onClick={closeNavbar}>
        <img src={logo} alt="Harish Sundar" className='logo' style={{cursor: 'pointer'}} />
      </Link>
        <nav ref={navRef} className={isNavOpen ? 'responsive_nav' : ''}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            onClick={closeNavbar}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={50}
            onClick={closeNavbar}
            className={activeSection === 'education' ? 'active' : ''}
          >
            Education
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            onClick={closeNavbar}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            onClick={closeNavbar}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            onClick={closeNavbar}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            onClick={closeNavbar}
            className={activeSection === 'contact' ? 'active' : ''}
          >
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
