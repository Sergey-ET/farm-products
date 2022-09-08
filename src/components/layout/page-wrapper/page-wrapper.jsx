import React from 'react';
import Header from '/src/components/layout/header/header';
import OrderPage from '/src/components/pages/order-page/order-page';
import Footer from '/src/components/layout/footer/footer';
import { StyledMain } from './styles';

function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <StyledMain>
        <OrderPage products={products} />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
