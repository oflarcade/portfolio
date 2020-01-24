import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1 className="textColor">About</h1>
      <h3 className="textColor">
        Get in touch:
      </h3>
      <h4 className="textColor">
        Omar Farouk Lakhdhar
      </h4>
      <div>
      <p className="textColor">Let's chat &nbsp;<a href='mailto:hello@oflcad.me'>hello@oflcad.me</a></p>
      </div>
    </ div>
  )
};

export default About;