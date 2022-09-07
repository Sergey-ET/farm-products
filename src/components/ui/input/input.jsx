import React from 'react';
import { StyledInput } from './styles';

function Input({ minWidth, type, placeholder }) {
  return (
    <StyledInput $minWidth={minWidth} type={type} placeholder={placeholder} />
  );
}

export default Input;
