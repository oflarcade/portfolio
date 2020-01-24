import React, { Dispatch, SetStateAction } from 'react';
import {PageNameProps} from '../App/App';


export interface LandingPageProps {
  setPage: Dispatch<SetStateAction<PageNameProps['pageNames']>>
}

const LandingPage: React.FC<LandingPageProps> = (Props) => {
  return (
    <div>
      <h1>OFL ARCADE</h1>

      <div>
        <h2>Hi!, 😇</h2>
        <br/><br/>
        <p>My name is Omar Farouk Lakhdhar and I'm a software developer.</p>
        <p>I can solve all/some of your problems.</p>
        <br/><br/>
      </div>

      {/* use passed setPage property to set 'page' in App.tsx */}
      <div onClick={() => Props.setPage('home')} style={{cursor: 'pointer'}}>
        <p>Continue to Home</p>
      </div>
    </div>
  )
};

export default LandingPage;