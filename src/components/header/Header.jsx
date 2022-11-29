import React from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import HeaderButton from './headerButton/HeaderButton';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
          <Logo/>
          <Navbar/>
          <HeaderButton/>
      </div>
    </header>
  )
}

export default Header