import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="textColor">Contact</h1>
      <h3 className="title">
        Get in touch :
      </h3>
      <div>
        <p className="textColor">Let's chat &nbsp;<a href='mailto:hello@oflcad.me'>hello@oflcad.me</a></p>
      </div>
      <br></br>
      <div className='row'>
        <h3 className="title">Twitter : </h3>
        <br></br>
        <a href='https://www.twitter.com/ofltunisia'>@ofltunisia</a>
      </div>

    </ div>
  )
};

export default Contact;