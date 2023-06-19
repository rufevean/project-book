
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Model from '../components/Model';
import hi1 from '../assets/hi1.png';
import '../styles/homepage.css';

const Homepage = () => {
  const [rotationTrigger, setRotationTrigger] = useState(false);

  const handleNavLinkClick = () => {
    setRotationTrigger(!rotationTrigger);
  };

  return (
    <div className='homepage'>
      <Model rotationTrigger={rotationTrigger} />
      <div className='homepage-socials'>
        <div className='homepage-codeforces option'>Codeforces</div>
        <div className='homepage-linkedin option'>LinkedIn</div>
        <div className='homepage-github option'>Github</div>
      </div>
      <div className='homepage-grid'>
        <div className='homepage-text'>
          <div className='homepage-name'>Dheeraj Chowdary</div>
          <div className='homepage-text-subtext'>Frontend Developer and Rust programmer</div>
          <div className='homepage-portfolio-text'>Portfolio</div>
        </div>
        <div className='homepage-pages'>
          <div className='homepage-pages-about nav'>
            <NavLink to='/about' onClick={handleNavLinkClick}>
              About
            </NavLink>
          </div>
          <div className='homepage-pages-skills nav'>
            <NavLink to='/skills' onClick={handleNavLinkClick}>
              Skills
            </NavLink>
          </div>
          <div className='homepage-pages-work nav'>
            <NavLink to='/work' onClick={handleNavLinkClick}>
              Work
            </NavLink>
          </div>
        </div>
      </div>
      <img src={hi1} className='sticker' alt='Sticker' />
    </div>
  );
};

export default Homepage;
