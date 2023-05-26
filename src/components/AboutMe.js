import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myImage from '../assets/images/mii.png';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <p>Welcome to my portfolio! I'm Jeacqueline, a new programmer with experience in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Python. 🤓</p>
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
          <img src={myImage} alt="Jeacqueline" className='about-image'/>
    </div>
  );
};

export default AboutMe;
