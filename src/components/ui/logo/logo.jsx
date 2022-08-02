import React from 'react';
import { ReactComponent as LogoImage } from '/src/assets/icons/logo.svg';
import { StyledLogo, Text } from './styles';

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
