import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/mii.ico'
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className='logo'/>
        </Link>
      </div>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to="/aboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
