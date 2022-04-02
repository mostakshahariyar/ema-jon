import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <h4 className='header-title'> Hack<samp>ing.</samp> </h4>
        <nav>
          <a href="/home">HOME</a>
          <a href="/hackers">HACKERS</a>
          <a href="/compani">COMAPANY</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;