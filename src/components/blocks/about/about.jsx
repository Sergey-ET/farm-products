import React from 'react';
import Title, { titleSize } from '/src/components/ui/title/title';
import './style.css';

function About() {
  return (
    <section className="about">
      <Title size={titleSize.h1}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <p className="about__text">
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </p>
    </section>
  );
}

export default About;
