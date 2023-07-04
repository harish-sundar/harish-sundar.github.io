import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const FooterSection = () => {
    return (
        <footer class = "footer">
            <div class = "footer-text">
                <p>&copy; 2023 | Designed & Built by Harish Sundar | Powered by React </p>
            </div>
            <div class = "footer-icon">
                <Link to="home" spy={true} smooth={true} offset={50}><i class = "bx bx-up-arrow-alt"></i></Link>
            </div>
        </footer>
    );
};

export default FooterSection;
