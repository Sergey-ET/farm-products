import React from 'react';
import Logo from '/src/components/ui/logo/logo';
import { StyledSection } from './styles';

function Footer() {
  return (
    <StyledSection as="header">
      <Logo />
      <span>Создано 2021</span>
    </StyledSection>
  );
}

export default Footer;
