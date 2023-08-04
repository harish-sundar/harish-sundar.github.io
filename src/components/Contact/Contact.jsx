import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_wtbo1pf', 'template_dvobii6', form.current, 'oLklPKKHcNeoRGZPZ')
      .then(
        () => {
          alert('Thank you for reaching out! I will get back to you as soon as possible.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="contact-header">
        <h1>
          <span className="contact-title">Contact:</span> Let's Connect!
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <div className="input-field">
          <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              pattern="^[a-zA-Z]+ [a-zA-Z]+$"
              title="Please enter a valid full name (Firstname Lastname)"
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address"
            />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
          <span className="focus"></span>
        </div>
        <div className="contact-button-box">
          <button className="button-box">
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
