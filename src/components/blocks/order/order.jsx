import React, { useState } from 'react';
import { Label } from '/src/components/styled';
import Button from '/src/components/ui/button/button';
import { TitleSize } from '/src/components/ui/title/title';
import Input from '/src/components/ui/input/input';
import CheckboxList from '/src/components/ui/checkbox-list/checkbox-list';
import ProductCard from '/src/components/ui/product-card/product-card';

import {
  StyledSection,
  StyledTitle,
  StyledForm,
  FormItem,
  PriceValue,
  CheckboxLabel,
  StyledSwiper
} from './styles';

import { Mousewheel, Scrollbar } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function Order({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  return (
    <>
      <StyledSection>
        <StyledTitle level={1} size={TitleSize.BIG}>
          Сделать заказ
        </StyledTitle>
        <StyledForm>
          <FormItem $bottom={18}>
            <Label $margin={12}>Выберите продукты</Label>
            <CheckboxList
              labelComponent={CheckboxLabel}
              name={'select-products'}
              options={products.map((product) => ({
                value: product.id,
                title: product.title
              }))}
              selectValues={selectProductIds}
              onChange={setSelectProductIds}
            />
          </FormItem>
          <FormItem>
            <Label $margin={24}>Сделать заказ</Label>
            <Input
              minWidth={313}
              type="text"
              placeholder="Введите адрес доставки"
            />
            <Label $small $margin={8}>
              Цена
            </Label>
            <PriceValue value={fullPrice} />
            <Button minWidth={313}>Купить</Button>
          </FormItem>
        </StyledForm>
        <StyledSwiper
          modules={[Mousewheel, Scrollbar]}
          direction={'vertical'}
          spaceBetween={12}
          slidesPerView={'auto'}
          mousewheel
          scrollbar={{ draggable: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledSection>
    </>
  );
}

export default Order;
