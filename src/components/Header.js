import React from 'react';
import GithubCorner from 'react-github-corner';

const Header = () => (
  <header className='header'>
    <div className='section'>
      <img src='https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-1/p50x50/22195487_530668620613620_4433439146068775797_n.png?oh=5a51e2d53cb6496ad2b4d8cfc47132c1&oe=5B23C0AC' className='section__logo' alt='logo Beta a Robô' />
      <h1>Vem de #chat com a beta</h1>
    </div>

    <GithubCorner octoColor='var(--bg-color)' bannerColor='var(--primary-color)' href='https://github.com/simoneas02/beta-contrata#readme' />
  </header>
);

export default Header;