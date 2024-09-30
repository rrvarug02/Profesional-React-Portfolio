import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Pantry Rescue',
    image: '/images/pantryrescue.PNG',
    deployedLink: 'https://olivercappis.github.io/pantry-rescue/',
    githubLink: 'https://github.com/olivercappis/pantry-rescue',
  },
  {
    title: 'Zoo Tycoon',
    image: '/images/ZooTycoon.PNG',
    deployedLink: 'https://zoo-tycoon.onrender.com/',
    githubLink: 'https://github.com/Jarvis318/Zoo-Tycoon',
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;