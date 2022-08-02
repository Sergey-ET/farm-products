import styled from 'styled-components';

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 398px;
  text-decoration: none;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: ${(props) => props.theme.colorBlackForText};
`;
