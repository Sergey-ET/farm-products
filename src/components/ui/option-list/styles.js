import styled from 'styled-components';
import { Li } from '/src/components/styled';

export const Option = styled(Li)`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 150%;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: 700;
  white-space: nowrap;
`;
