import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  min-width: ${(props) => `${props.$minWidth}px` || '100%'};
  height: 48px;
  padding: 14px 12px;
  margin-bottom: ${(props) => `${props.$bottom || 20}px`};
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.colorBlackForText};
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
