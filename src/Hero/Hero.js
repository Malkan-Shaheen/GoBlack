import React from 'react';
import './Hero.css';
import FlipClock from './CountdownClock';
import frameHero from './../images/frame-hero.png';
import Header from './../Header/Header';

const ProjectBlackLanding = () => {
  return (
    
    <div className="hero-container">
      <div className="section-container">
        <div className="overlay" /><Header />
        <div className="content">
          <div className="heading-container">
            <h1 className="heading">Project BLACK</h1>
            <img className='img-frame' src={frameHero} alt="Frame" />
          </div>

          <p className="subtitle">BE A PART OF THE MOVEMENT</p>
          <p className="description">
            A Movement Dedicated To Elevating Black Excellence And Success.<br />
            We Reshape Narratives, Fund Innovation, And Create Opportunities For Lasting Legacies.
          </p>
         
          <button className="cta-button" onclick="window.location.href='https://discord.gg/sZBU2bSSGN'">Join Now</button>

          <div className="countdown-wrapper">
            <p className="coming-soon">Coming Soon </p>
            <FlipClock /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlackLanding;
