import React, { useState, useEffect } from "react";
import data from "./experience_data.js";
import './Experience.css';

const ExperienceSection = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);


    return (
        <section className = "experience" id = "experience">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="experience-header">
        <h1>
          <span className="experience-title">Experience:</span> Slide Through
        </h1>
      </div>
      <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, location, duration, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="location">{location}</p>
              <p className="duration">{duration}</p>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
    <br />
    <br />
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
    </section>
    )
};

export default ExperienceSection;