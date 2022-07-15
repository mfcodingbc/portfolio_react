import React from 'react';

import { Link } from 'react-router-dom';

import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className='navbar text-decoration-none'>
      <div className='container flex-row justify-space-between-lg justify-center align-center'>
        <Link to='/portfolio_react'>
          <h1>Mitchell Frey</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
