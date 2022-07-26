import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='text-center'>
      <ul>
        <li>
          <Link to='/portofolio_react/about'>About Me</Link>
        </li>
        <li>
          <Link to='/portofolio_react/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/portofolio_react/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/portofolio_react/resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
