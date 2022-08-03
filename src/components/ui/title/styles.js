import styled from 'styled-components';
import { TitleSize } from './title';

const getTitleOptions = (props) => {
  let titleOptions = {
    fontSize: '36px',
    lineHeight: '115%'
  };
  if (props.$size === TitleSize.BIG) {
    titleOptions.fontSize = '44px';
    titleOptions.lineHeight = '115%';
  }
  if (props.$size === TitleSize.NORMAL) {
    titleOptions.fontSize = '24px';
    titleOptions.lineHeight = '130%';
  }
  if (props.$size === TitleSize.SMALL) {
    titleOptions.fontSize = '18px';
    titleOptions.lineHeight = '150%';
  }

  return titleOptions;
};

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => getTitleOptions(props).fontSize};
  line-height: ${(props) => getTitleOptions(props).lineHeight};
`;
