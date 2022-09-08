import styled from 'styled-components';
import { Section, Form } from '/src/components/styled';
import Title from '/src/components/ui/title/title';
import tick from '/src/assets/icons/tick.svg';
import Price from '/src/components/ui/price/price';
import { Swiper } from 'swiper/react';

export const StyledSection = styled(Section)`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  min-width: ${(props) => props.theme.pageWidth};
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorGray};
`;

export const StyledTitle = styled(Title)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StyledForm = styled(Form)`
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const FormItem = styled.div`
  width: 353px;
  margin-bottom: ${(props) => `${props.$bottom || 0}px`};
  padding: 24px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const PriceValue = styled(Price)`
  margin-bottom: 32px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    display: block;
    right: 0;
    height: 24px;
    width: 24px;
    background-color: ${(props) => props.theme.colorGray};
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.$isChecked &&
    `
    &::after {
      position: absolute;
      content: "";
      display: block;
      right: 0;
      height: 24px;
      width: 24px;
      background-color: ${props.theme.colorForButton};
      background-image: url(${tick});
      background-repeat: no-repeat;
      background-position: center;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const StyledSwiper = styled(Swiper)`
  width: 727px;

  .swiper-slide {
    flex-shrink: 1;
  }
`;
