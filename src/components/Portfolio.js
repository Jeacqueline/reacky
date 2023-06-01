import React from 'react';
import TextEd from '../assets/images/TextEd.png';
import AirCast from '../assets/images/AirCast.png';
import Quizzer from '../assets/images/quizzer.png';
import Todo from '../assets/images/to-do.png';
import TaskMe from '../assets/images/task-me.png';
import SaboresDoMundo from '../assets/images/sabores-do-mundo.png';
import Profinder from '../assets/images/profinder.png'
import '../styles/portfolio.css';



const projects = [
  {
    id: 1,
    title: 'TexEd',
    description: 'This is a progressive web application (PWA) that allows you to write and edit text in the browser, even without an internet connection.',
    url: 'https://texted.herokuapp.com/',
    image:TextEd
  },
  {
    id: 2,
    title: 'Aircast',
    description: 'You will be able to search for the best deals on flights and view real-time weather updates for your destination all in one place.',
    url: 'https://drums180.github.io/AirCast-Team2/',
    image:AirCast
  },
 
  {
    id: 3,
    title: 'Quizzer',
    description: 'A quiz with timer and test your knowledge about JavaScript',
    url: 'https://jeacqueline.github.io/Quizzer/',
    image:Quizzer
  },
  {
    id: 4,
    title: 'To-do',
    description: 'My note To-Do app and uses technologies like express.js, mongoose. It allows you to create, read, and delete notes.',
    url: 'https://notetodo.herokuapp.com/',
    image:Todo
  },
  {
    id: 5,
    title: 'Task-me',
    description: 'simple work day organizer and you can add an event in the blocks and load the page and the events will follow there',
    url: 'https://jeacqueline.github.io/Task-me/',
    image:TaskMe
  },
  {
    id: 6,
    title: 'Sabores do Mundo',
    description: 'A full Library of the most famous dishes of the world!',
    url: 'https://sabores-do-mondo.herokuapp.com/',
    image:SaboresDoMundo
  },
  {
    id: 7,
    title: 'ProFinder',
    description: 'Created with the aim of helping people find someone who can solve their problems.',
    url: 'https://github.com/AndyAnza/profinder ',
    image:Profinder
  }
  
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = React.useState(0);

  const handlePrevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === activeProject ? 'active' : ''}
            aria-current={index === activeProject ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveProject(index)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-item ${index === activeProject ? 'active' : ''}`}
          >
            <img src={project.image} className="d-block w-100" alt="Project" />
            <div className="carousel-caption d-none d-md-block">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        onClick={handlePrevProject}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        onClick={handleNextProject}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Portfolio;