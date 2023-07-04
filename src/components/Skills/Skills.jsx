import React from 'react';
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaHandshake,
  FaBrain,
  FaComments,
  FaChalkboardTeacher,
  FaClock,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiCsharp,
  SiFlask, 
  SiExpress, 
  SiRacket, 
  SiIntellijidea, 
  SiEclipseide, 
  SiGooglecolab, 
  SiPowerbi, 
  SiTableau,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiPycharm,
  SiJupyter,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { HiMagnifyingGlass  } from "react-icons/hi2";
import './Skills.css';

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="skills-header">
        <h1>
          <span className="skills-title">Skills:</span> My Expertise
        </h1>
      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Languages</h2>
      </div>
      <div className="lang-icons">
        <div className="lang-icon-container">
          <FaJava className="lang-icon" />
          <p>Java</p>
        </div>
        <div className="lang-icon-container">
          <FaPython className="lang-icon" />
          <p>Python</p>
        </div>
        <div className="lang-icon-container">
          <FaHtml5 className="lang-icon" />
          <p>HTML</p>
        </div>
        <div className="lang-icon-container">
          <FaCss3Alt className="lang-icon" />
          <p>CSS</p>
        </div>
        <div className="lang-icon-container">
          <FaJs className="lang-icon" />
          <p>JavaScript</p>
        </div>
        <div className="lang-icon-container">
          <SiTypescript className="lang-icon" />
          <p>TypeScript</p>
        </div>
        <div className="lang-icon-container">
          <i className="bx bxl-c-plus-plus lang-icon"></i>
          <p>C++</p>
        </div>
        <div className="lang-icon-container">
          <SiCsharp className="lang-icon" />
          <p>C#</p>
        </div>
        <div className="lang-icon-container">
          <SiRacket className="lang-icon" />
          <p>Racket</p>
        </div>
      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Frameworks/Libraries</h2>
      </div>
      <div className="frame-icons">
        <div className="frame-icon-container">
          <SiFlask className="frame-icon" />
          <p>Flask</p>
        </div>
        <div className="frame-icon-container">
          <FaReact className="frame-icon" />
          <p>React</p>
        </div>
        <div className="frame-icon-container">
          <SiExpress className="frame-icon" />
          <p>Express</p>
        </div>
        <div className="frame-icon-container">
          <FaGit className="frame-icon" />
          <p>Git</p>
        </div>
        <div className="frame-icon-container">
          <SiPandas className="frame-icon" />
          <p>Pandas</p>
        </div>
        <div className="frame-icon-container">
        <SiScikitlearn className="frame-icon" />
          <p>Scikit-learn</p>
        </div>
        <div className="frame-icon-container">
        <SiNumpy className="frame-icon" />
          <p>Numpy</p>
        </div>

      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Software</h2>
      </div>
      <div className="tech-icons">
        <div className="tech-icon-container">
          <FaGithub className="tech-icon" />
          <p>Github</p>
        </div>
        <div className="tech-icon-container">
          <TbBrandVscode className="tech-icon" />
          <p>VS Code</p>
        </div>
        <div className="tech-icon-container">
          <SiIntellijidea className="tech-icon" />
          <p>IntelliJ IDEA</p>
        </div>
        <div className="tech-icon-container">
          <SiPycharm className="tech-icon" />
          <p>PyCharm</p>
        </div>
        <div className="tech-icon-container">
          <SiEclipseide className="tech-icon" />
          <p>Eclipse</p>
        </div>
        <div className="tech-icon-container">
          <SiJupyter className="tech-icon" />
          <p>Jupyter Notebook</p>
        </div>
        <div className="tech-icon-container">
          <SiPowerbi className="tech-icon" />
          <p>Microsoft PowerBI</p>
        </div>
        <div className="tech-icon-container">
          <SiTableau className="tech-icon" />
          <p>Tableau</p>
        </div>
        <div className="tech-icon-container">
          <SiGooglecolab className="tech-icon" />
          <p>Google Colab</p>
        </div>
      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Soft Skills</h2>
      </div>
      <div class="soft-icons">
      <div className="soft-icon-container">
          <FaComments className="soft-icon" />
          <p>Communication</p>
        </div>
        <div className="soft-icon-container">
          <FaHandshake className="soft-icon" />
          <p>Collaboration</p>
        </div>
        <div className="soft-icon-container">
          <FaBrain className="soft-icon" />
          <p>Problem Solving</p>
        </div>
        <div className="soft-icon-container">
          <FaChalkboardTeacher className="soft-icon" />
          <p>Leadership</p>
        </div>
        <div className="soft-icon-container">
          <FaClock className="soft-icon" />
          <p>Time Management</p>
        </div>
        <div className="soft-icon-container">
          <HiMagnifyingGlass className="soft-icon" />
          <p>Detail Orientation</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
