import styled from 'styled-components';
import Title from '/src/components/ui/title/title';

export const CardWrapper = styled.div`
  display: flex;
  height: 288px;
  width: 727px;
  padding: 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  display: block;
  width: 248px;
  height: 248px;
  margin-right: 20px;
  object-fit: cover;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
  cursor: pointer;
`;

export const Price = styled.span`
  display: block;
  position: absolute;
  bottom: 20px;
  width: 140px;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  background-color: ${(props) => props.theme.colorBlue};
`;
