import styled from 'styled-components';
import { Section } from '/src/components/styled';
import AboutImage from '/src/assets/icons/farmer.svg';

export const StyledSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 184px;
  padding-right: 590px;
  padding-bottom: 183px;
  padding-left: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorBlue};

  &::after {
    content: '';
    position: absolute;
    top: 37px;
    right: ${(props) => props.theme.pagePadding};
    bottom: 0;
    width: 446px;
    height: 627px;
    background-image: url(${AboutImage});
    background-repeat: no-repeat;
    overflow: hidden;
  }
`;

export const Text = styled.p`
  max-width: 538px;
  margin: 0;
  margin-top: 24px;
`;
