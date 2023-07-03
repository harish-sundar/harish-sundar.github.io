import React from 'react';
import nuLogo from '../images/nu_logo.jpeg';
import ccmLogo from '../images/ccm_logo.jpeg';
import mcstLogo from '../images/mcst_logo.jpeg';

const EducationSection = () => {
  return (
    <section className="education2" id="education2">
      <br />
      <br />
      <br />
      <div className="education-header">
        <h1>
          <span className="education-title">Education:</span> A Quick Timeline
        </h1>
      </div>
      <div className="timeline">
        <div className="container left-container">
          <input type="checkbox" id="neu-toggle" className="toggle-checkbox" />
          <label htmlFor="neu-toggle" className="collapsible-label">
          <img src={nuLogo} alt="Northeastern University" />
            <div className="text-box">
              <div className = "school-title">
                <h2>Northeastern University</h2>
              </div>
              <a>
                <i className="bx bx-calendar"></i>
              </a>
              <small>&nbsp;2022-2026</small>
              <p>
                Bachelor of Science in Computer Science, Minor in Mathematics
                <br />
                <br /> <i className="bx bxs-map"></i> Boston, MA
              </p>
              <div className="plus"></div>
              <span className="left-container-arrow"></span>
            </div>
          </label>
          <div className="left-text-content">
            <p>Concentration: Artificial Intelligence</p>
            <br />
            <p>
              Courses: Object-Oriented Design, Fundamentals of Computer Science
              I/II, Foundations of Cybersecurity, Discrete Structures,
              Mathematics of Data Models, Linear Algebra, Introduction to
              Mathematical Reasoning
            </p>
            <br />
            <p>
              Activities: NU Electric Racing Club (Software Subteam), Husky
              Competitive Programming Club
            </p>
            <br />
            <p>Dean's List</p>
            <br />
            <div className="minus"></div>
          </div>
        </div>

        <input type="checkbox" id="ccm" />
        <div className="container right-container">
          <input
            type="checkbox"
            id="ccm-toggle"
            className="toggle-checkbox"
          />
          <label htmlFor="ccm-toggle" className="collapsible-label">
          <img src={ccmLogo} alt="County College of Morris" />
            <div className="text-box">
            <div className = "school-title">
                <h2>County College of Morris</h2>
              </div>
              <a>
                <i className="bx bx-calendar"></i>
              </a>
              <small>&nbsp;2022-2022</small>
              <p>
                Dual Enrollment, Computer Science
                <br />
                <br /> <i className="bx bxs-map"></i> Randolph, NJ
              </p>
              <div className="plus"></div>
              <label htmlFor="ccm" className="collapsible-label">
                <span className="right-container-arrow"></span>
              </label>
            </div>
          </label>
          <div className="right-text-content">
            <p>26 transferrable credits earned</p> <br />
            <p>
              Courses: Data Structures &amp; Algorithms, Computer Architecture
              &amp; Assembly Language, Analytic Geometry &amp; Calculus I/II,
              Probability &amp; Statistics, English Composition I/II
            </p>
            <br />
            <p>Dean's Honor List</p>
            <br />
            <div className="minus"></div>
          </div>
        </div>

        <div className="container left-container">
          <input type="checkbox" id="mcst" />
          <label htmlFor="mcst" className="collapsible-label">
          <img src={mcstLogo} alt="MCST" />
            <div className="text-box">
            <div className = "school-title">
                <h2>Morris County School of Technology</h2>
              </div>
              <a>
                <i className="bx bx-calendar"></i>
              </a>
              <small>&nbsp;2018-2022</small>
              <p>
                High School Diploma, Academy for Computer &amp; Information
                Sciences
                <br />
                <br /> <i className="bx bxs-map"></i> Denville, NJ
              </p>
              <div className="plus"></div>
              <span className="left-container-arrow"></span>
            </div>
          </label>
          <div className="left-text-content">
            <p>Attended a selective vocational high school</p>
            <br />
            <p>
              Activities: hackMCST Head Director, Co-Founder of MCST Mind
              Matters, STEM Club President, Academy Peer Leader, National Honor
              Society, National Technical Honor Society, Robotics Club
            </p>
            <br />
            <p>
              Awards: Eagle Scout, Presidential Volunteer Service Award, High
              Honor Roll
            </p>
            <br />
            <div className="minus"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
