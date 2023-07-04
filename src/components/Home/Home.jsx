import React from 'react';
import { Link } from 'react-scroll';
import harishPic from '../../images/harish_photo.png';
import './Home.css';

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Harish Sundar</h1>
        <div className="wrapper">
          <ul className="dynamic-texts">
            <li><span>CS Student</span></li>
            <li><span>Developer</span></li>
            <li><span>Data Scientist</span></li>
            <li><span>Problem Solver</span></li>
            <li><span>Tech Enthusiast</span></li>
          </ul>
        </div>
        <p>
          Hey, I'm Harish! I'm an undergraduate student at Northeastern University studying computer science and mathematics. I'm passionate about expanding my skills as a developer and always eager to learn new things. My areas of interest include machine learning, full-stack development, and data science. I'm constantly seeking new opportunities to grow and apply my knowledge. Let's connect and collaborate!
        </p>
        <div className="button-box">
          <Link to="contact" spy={true} smooth={true} offset={50}>Let's Connect!</Link>
        </div>
      </div>
      <div className="home-sci">
        <a href="mailto:harish.u.sundar@gmail.com"><i className='bx bx-envelope'></i></a>
        <a href="https://www.linkedin.com/in/harish-sundar" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
        <a href="https://github.com/harish-sundar" target="_blank"><i className='bx bxl-github'></i></a>
      </div>
      <div className="harish-pic">
        <img src={harishPic} alt="Harish Sundar" />
      </div>
      <span className="home-imgHover"></span>
    </section>
  );
};

export default HomeSection;
