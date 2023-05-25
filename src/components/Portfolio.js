import React from 'react';

const projects = [
  {
    id: 1,
    title: 'TexEd',
    description: 'This is a progressive web application (PWA) that allows you to write and edit text in the browser, even without an internet connection.',
    url: 'https://texted.herokuapp.com/'
  },
  {
    id: 2,
    title: 'Aircast',
    description: 'You will be able to search for the best deals on flights and view real-time weather updates for your destination all in one place.',
    url: 'https://drums180.github.io/AirCast-Team2/'
  },
 
  {
    id: 3,
    title: 'Quizzer',
    description: 'A quiz with timer and test your knowledge about JavaScript',
    url: 'https://jeacqueline.github.io/Quizzer/'
  },
  {
    id: 4,
    title: 'To-do',
    description: 'My note To-Do app and uses technologies like express.js, mongoose. It allows you to create, read, and delete notes.',
    url: 'https://notetodo.herokuapp.com/'
  },
  {
    id: 5,
    title: 'Task-me',
    description: 'simple work day organizer and you can add an event in the blocks and load the page and the events will follow there',
    url: 'https://jeacqueline.github.io/Task-me/'
  },
  {
    id: 6,
    title: 'Sabores do Mundo',
    description: 'A full Library of the most famous dishes of the world!',
    url: 'https://sabores-do-mondo.herokuapp.com/'
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {projects.map(project => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.url}>Click 🦈</a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
