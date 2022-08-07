import React from 'react';
import Header from '/src/components/layout/header/header';
import MainPage from '/src/components/pages/main-page/main-page';
import Footer from '/src/components/layout/footer/footer';
import { StyledMain } from './styles';

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <StyledMain>
        <MainPage {...prop} />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
