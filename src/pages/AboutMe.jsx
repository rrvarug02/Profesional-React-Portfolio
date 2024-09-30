import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img 
        src="/images/IMG_1515.jpg" // Path to my image
        alt="Your Name" 
        style={{ width: '300px', height: 'auto', borderRadius: '50%' }} // Adjust width to 300px
      />
      <p>Hi, I'm Rahul Varughese, a web developer with a passion for creating dynamic and responsive web applications. I enjoy learning new technologies and improving my skills. In my spare time, I like to explore open-source projects and collaborate with other developers.</p>
    </section>
  );
};

export default AboutMe