import styled from 'styled-components';
import { Section, Ul, Li } from '/src/components/styled';

export const StyledFeaturesList = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  text-align: center;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  gap: ${(props) => props.theme.indent};
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 64px;
  margin-bottom: 64px;
  list-style: none;
  text-align: left;
`;

export const StyledItem = styled(Li)`
  list-style: none;
`;
