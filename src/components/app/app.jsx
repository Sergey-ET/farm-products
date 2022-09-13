import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import features from '/src/mocks/features';
import products from '/src/mocks/products';
import { GlobalStyle } from './styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from '/src/const';
import MainPage from '/src/components/pages/main-page/main-page';
import OrderPage from '/src/components/pages/order-page/order-page';
import ScrollToTop from '/src/components/ui/scroll-top/scroll-top';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
          </Route>
          <Route path={AppRoute.ORDER} element={<PageWrapper />}>
            <Route index element={<OrderPage products={products} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
