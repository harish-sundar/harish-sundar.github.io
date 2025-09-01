import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; {currentYear} | Designed & Built by Harish Sundar</p>
      </div>
      <div className="footer-icon">
        <Link to="home" spy={true} smooth={true} offset={50}>
          <i className="bx bx-up-arrow-alt"></i>
        </Link>
      </div>
    </footer>
  );
};

export default FooterSection;
