import styled from 'styled-components';
import Title from '/src/components/ui/title/title';

export const TitleList = styled.div`
  display: inline-flex;
  width: 335px;
  justify-content: space-between;
`;

export const TitleButton = styled.button`
  padding: 8px 12px;
  background-color: ${(props) =>
    props.active ? props.theme.colorForFarmLabel : props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const TitleText = styled(Title)`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackForText};
`;

export const Content = styled.div`
  display: block;
  display: -webkit-box;
  max-width: 419px;
  max-height: 105px;
  padding-top: 16px;
  padding-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: auto;
  text-overflow: ellipsis;
`;
