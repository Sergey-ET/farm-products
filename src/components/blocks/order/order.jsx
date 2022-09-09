import React, { useState } from 'react';
import { Label } from '/src/components/styled';
import Button from '/src/components/ui/button/button';
import { TitleSize } from '/src/components/ui/title/title';
import Input from '/src/components/ui/input/input';
import CheckboxList from '/src/components/ui/checkbox-list/checkbox-list';
import ProductCard from '/src/components/ui/product-card/product-card';
import { SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import {
  StyledSection,
  StyledTitle,
  StyledForm,
  FormItem,
  PriceValue,
  CheckboxLabel,
  StyledSwiper
} from './styles';

function Order({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const [address, setAddress] = useState('');
  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.title} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

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
              onClickLabel={handleOnClickProduct}
            />
          </FormItem>
          <FormItem>
            <Label $margin={24}>Сделать заказ</Label>
            <Input
              minWidth={313}
              type="text"
              placeholder="Введите адрес доставки"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Label $small $margin={8}>
              Цена
            </Label>
            <PriceValue value={fullPrice} />
            <Button minWidth={313} onClick={handleBuyClick}>
              Купить
            </Button>
          </FormItem>
        </StyledForm>
        <StyledSwiper
          modules={[Mousewheel, Scrollbar]}
          onSwiper={setSwiperRef}
          spaceBetween={12}
          direction={'vertical'}
          slidesPerView={'auto'}
          scrollbar={{ draggable: true }}
          mousewheel
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
