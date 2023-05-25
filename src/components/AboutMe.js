import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myImage from '../assets/images/mii.png'

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <img src={myImage} alt="Jeacqueline" />
          <p>¡Bienvenido a mi portafolio! Soy Jeacqueline, un programador con experiencia en HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL,Python.</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/Jeacqueline" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jeacqueline-rios/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
