import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import data from './education_data.js';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';


const EducationSection = () => {
    return (
      <section className="education" id="education">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="education-header">
          <h1>
            <span className="education-title">Education:</span> A Timeline
          </h1>
        </div>
        <br />
          <VerticalTimeline>
            {data.map((entry) => (
              <VerticalTimelineElement
                key={entry.place}
                contentStyle={{
                  background: '#00abf0',
                  color: '#fff',
                  minHeight: '200px',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #00abf0' }}
                date={entry.date}
                iconStyle={{ background: entry.iconBg, color: '#F9F9F9' }}
                icon={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <img
                      src={entry.icon}
                      alt="Icon"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                }
              >
                <h3 style={{ color: '#fff', fontSize: '24px' }}> <strong>{entry.place}</strong></h3>
                <h4 style={{ color: '#fff', fontSize: '16px' }}className="vertical-timeline-element-subtitle">{entry.title}</h4>
                <h4 style={{ color: '#fff', fontSize: '14px' }} className="vertical-timeline-element-subtitle"> <i className="bx bxs-map"></i> {entry.location}</h4>
  
                {entry.description && (
                  <ul
                    style={{
                      marginTop: '5px',
                      listStyleType: 'disc',
                      marginLeft: '5px',
                    }}
                  >
                    <br />
                    {entry.description.map((item, index) => (
                      <li
                        key={`description-${index}`}
                        style={{
                          color: '#fff',
                          fontSize: '14px',
                          paddingLeft: '1px',
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
      </section>
    );
  };
  
  export default EducationSection;  
  
  
  
  
  
  