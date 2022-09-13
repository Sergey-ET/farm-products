import React from 'react';
import Title from '/src/components/ui/title/title';
import FeatureCard from '/src/components/ui/feature-card/feature-card';
import Button from '/src/components/ui/button/button';
import { AppRoute } from '/src/const';
import { StyledFeaturesList, StyledList, StyledItem } from './styles';

function FeaturesList({ features }) {
  return (
    <StyledFeaturesList>
      {features?.length ? (
        <>
          <Title as="h2">Почему фермерские продукты лучше?</Title>
          <StyledList>
            {features.map((feature) => (
              <StyledItem key={feature.id}>
                <FeatureCard {...feature} />
              </StyledItem>
            ))}
          </StyledList>
          <Button minWidth={260} link={AppRoute.ORDER}>
            Купить
          </Button>
        </>
      ) : null}
    </StyledFeaturesList>
  );
}

export default FeaturesList;
