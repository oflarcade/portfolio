import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="textColor">Contact</h1>
      <h3 className="title">
        Get in touch :
      </h3>
      <br></br>
      <div>
        <p className="textColor">Let's chat &nbsp;<a href='mailto:hello@oflcad.me'>hello@oflcad.me</a></p>
      </div>
      <br></br>
      <div className='row'>
        <h3 className="title">Twitter : </h3>
        <br></br>
        &nbsp;<a href='https://www.twitter.com/ofltunisia'>@ofltunisia</a>
      </div>
      <br></br>
      <div className='row'>
        <h3 className="title">Github : </h3>
        &nbsp;<a href='#'> ...still cleaning some repos <span role="img" aria-label="recycle">♻️</span></a>
      </div>
      <div className='row'>
        <h3 className="title">LinkedIn : </h3>
        &nbsp;<a href='https://www.linkedin.com/in/omarfarouklakhdhar/'>/in/omarfarouklakhdhar</a>
      </div>
    </ div>
  )
};

export default Contact;