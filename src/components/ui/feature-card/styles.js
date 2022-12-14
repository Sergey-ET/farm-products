import styled from 'styled-components';

export const StyledFeatureCard = styled.article`
  min-height: 197px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForNegativeFeature
      : props.theme.colorForPositiveFeature};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
`;

export const Wrapper = styled.div`
  margin-left: ${(props) => props.theme.indent};
`;

export const Producer = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  padding: 4px 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForShopLabel
      : props.theme.colorForFarmLabel};
`;

export const Description = styled.p`
  margin: 0;
`;
