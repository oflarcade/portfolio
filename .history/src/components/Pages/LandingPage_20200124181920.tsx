import React, { Dispatch, SetStateAction } from 'react';
import { PageNameProps } from '../App/App';


export interface LandingPageProps {
  setPage: Dispatch<SetStateAction<PageNameProps['pageNames']>>
}

const LandingPage: React.FC<LandingPageProps> = (Props) => {
  return (
    <div>

      <div>
        <h1 className="textColor">Hi!, <span role="img" aria-label="innocent">😇</span></h1>
        <br /><br />
        <h2 className="textColor">My name is Omar Farouk Lakhdhar and I'm a software developer. <span role="img" aria-label="web plus mobile">💻➕📱</span></h2>
        <br /><br />
        <p className="textColor">I can solve all / some of your problems.</p>
        <br /><br />
        <p className="textColor">I build and sometimes rescues applications.</p>
        <br /><br />
        <p className="textColor">Let's chat &nbsp;<a href='mailto:hello@oflcad.me'>hello@oflcad.me</a></p>
      </div>
      <br /><br />
      <br /><br />
      {/* use passed setPage property to set 'page' in App.tsx */}

      <div onClick={() => Props.setPage('home')} style={{ cursor: 'pointer' }}>
        <p className="textColor">Continue to Home</p>
      </div>
    </div>
  )
};

export default LandingPage;