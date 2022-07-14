import React from 'react';

import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className='navbar text-decoration-none'>
      <div className='container flex-row justify-space-between-lg justify-center align-center'>
        <h1>Mitchell Frey</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
