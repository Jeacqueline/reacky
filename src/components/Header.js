import React from 'react';
import { Link } from 'react-router-dom';
import ico from '../assets/images/mii.ico'

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={ico} alt="Icono" />
        </Link>
      </div>
      <nav>
        <ul>
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
