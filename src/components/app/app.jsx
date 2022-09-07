import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import products from '/src/mocks/products';
import { GlobalStyle } from './styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper products={products} />
    </>
  );
}
