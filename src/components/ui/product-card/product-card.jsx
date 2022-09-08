import React from 'react';
import { TitleSize } from '/src/components/ui/title/title';
import Tabs from '/src/components/ui/tabs/tabs';
import OptionsList from '/src/components/ui/option-list/option-list';
import {
  CardWrapper,
  ProductImage,
  ContentWrapper,
  StyledTitle,
  Price
} from './styles';

function ProductCard({ product }) {
  const tabs = [
    {
      title: 'Oписание',
      content: product.description
    },
    {
      title: 'Характеристики',
      content: <OptionsList list={product.specifications} />
    },
    {
      title: 'Свойства',
      content: <OptionsList list={product.properties} />
    }
  ];
  return (
    <>
      <CardWrapper>
        <ProductImage src={product.image} />
        <ContentWrapper>
          <StyledTitle level={2} size={TitleSize.SMALL}>
            {product.title}
          </StyledTitle>
          <Tabs tabs={tabs} />
          <Price>
            {product.price} руб. / {product.weight} гр.
          </Price>
        </ContentWrapper>
      </CardWrapper>
    </>
  );
}

export default ProductCard;
