import React from 'react';
import './style.css';

export const titleSize = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  DEFAULT: ''
};

function Title({ children, size }) {
  return (
    <h1 className={`title${size ? ` title--${size}` : ''}`}>{children}</h1>
  );
}

export default Title;
