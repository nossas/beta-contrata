import React from 'react';
import GithubCorner from 'react-github-corner';

const Header = () => (
  <header className='header'>
    <GithubCorner size={80} bannerColor='var(--primary-color)' href='https://github.com/simoneas02/beta-contrata#readme' />
    <div className='header__description'>
      <img className='header__img' src='./assets/img/logo.png' alt='logo Beta a Robô' />
      <h1 className='header__title'>Vem de #chat com a beta</h1>
    </div>
  </header>
);

export default Header;