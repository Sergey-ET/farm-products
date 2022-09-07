import React from 'react';
import Order from '/src/components/blocks/order/order';

function OrderPage({ products }) {
  return (
    <>
      <Order products={products} />
    </>
  );
}

export default OrderPage;
