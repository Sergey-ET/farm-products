import styled from 'styled-components';
import Button from '/src/components/ui/button/button';

export const StyledButton = styled(Button)`
  display: inline-block;
  width: auto;
  min-width: 0;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 18px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
