import React from 'react';
import { ReactComponent as LogoImage } from '/src/assets/icons/logo.svg';
import { AppRoute } from '/src/const';
import { StyledLogo, Text } from './styles';

function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
