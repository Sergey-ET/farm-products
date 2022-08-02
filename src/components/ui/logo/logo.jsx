import React from 'react';
import logo from '/src/assets/icons/logo.svg';
import './style.css';

function Logo() {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="logo" width="44" height="44" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;
