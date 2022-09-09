import React from 'react';
import { StyledInput } from './styles';

function Input({ minWidth, type, placeholder, onChange }) {
  return (
    <StyledInput
      $minWidth={minWidth}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
