import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myImage from '../assets/images/mii.png';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <p>Welcome to my portfolio! I'm Jeacqueline, a new programmer</p>
          <p>Recently, I have expanded my skill set by acquiring knowledge in GitHub, JavaScript, HTML, CSS, and Node.js. I am constantly learning and staying up-to-date with the latest technologies and best practices in the industry. I am a fast self-learner, always eager to explore new tools and frameworks that can enhance my development capabilities.</p>
          <p>I have also obtained certifications in Scrum, Design Thinking, and Python, further strengthening my project management expertise and technical knowledge. These certifications have equipped me with valuable insights into agile methodologies, user-centered design, and programming fundamentals.</p>
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
