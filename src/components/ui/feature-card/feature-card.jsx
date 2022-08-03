import React from 'react';
import Title, { TitleSize, TitleLevel } from '/src/components/ui/title/title';
import {
  StyledFeatureCard,
  Container,
  Image,
  Wrapper,
  Producer,
  Description
} from './styles';

function FeatureCard({ producer, title, isNegative, description, image }) {
  return (
    <StyledFeatureCard $isNegative={isNegative}>
      <Container>
        <Image src={image} width={56} height={56} alt="icon" />
        <Wrapper>
          <Producer $isNegative={isNegative}>{producer}</Producer>
          <Title level={TitleLevel.H4} size={TitleSize.SMALL}>
            {title}
          </Title>
        </Wrapper>
      </Container>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </StyledFeatureCard>
  );
}

export default FeatureCard;
