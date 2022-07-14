import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='text-center'>
      <>
        <Link to='/about'>About Me</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/resume'>Resume</Link>
      </>
    </nav>
  );
};

export default Navigation;
