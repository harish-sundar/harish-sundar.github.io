import React from 'react';
import { FaGithub, FaLink, FaNewspaper } from 'react-icons/fa';
import data from './projects_data.js';
import './Projects.css';

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="projects-header">
        <h1>
          <span className="projects-title">Projects:</span> My Portfolio
        </h1>
      </div>
      <br />
      <div className="project-container">
        {data.map((project, index) => (
          <div className="project" key={index}>
            <h1>
              <strong>{project.name}</strong>
            </h1>
            <br />
            <p>
              <strong>Technologies Used: </strong>
              {project.skills}
            </p>
            <br />
            <ul>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <br />
            {project.img && (
              <div className="image-container">
                <img
                  src={project.img}
                  alt={project.name}
                  className="project-image"
                />
              </div>
            )}
            <br />
            <br />
            <div className="icons-container">
              <div className="github-link-container">
                {project.ghlink && (
                  <a
                    href={project.ghlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <FaGithub className="github-icon" />
                  </a>
                )}
              </div>
              {index === 0 && (
                <div className="news-icon link-button">
                  <FaNewspaper />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
