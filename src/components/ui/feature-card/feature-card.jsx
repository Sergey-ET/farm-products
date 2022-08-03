import React from 'react';
import Title, { TitleSize, TitleLevel } from '/src/components/ui/title/title';
import './style.css';

function FeatureCard({ producer, title, isNegative, description, image }) {
  return (
    <article
      className={`feature-card${isNegative ? ' feature-card--negative' : ''}`}
    >
      <div className="feature-card__container">
        <img
          src={image}
          className="feature-card__image"
          width={56}
          height={56}
          alt="icon"
        />
        <div className="feature-card__wrapper">
          <span
            className={`feature-card__producer${
              isNegative ? ' feature-card__producer--negative' : ''
            }`}
          >
            {producer}
          </span>
          <Title level={TitleLevel.H4} size={TitleSize.SMALL}>
            {title}
          </Title>
        </div>
      </div>
      <p
        className="feature-card__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </article>
  );
}

export default FeatureCard;
