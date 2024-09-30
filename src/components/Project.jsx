import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img 
        src={image} 
        alt={`${title} screenshot`} 
        style={{ width: '800px', height: 'auto' }} // Set width to 800px and height auto to maintain aspect ratio
      />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;