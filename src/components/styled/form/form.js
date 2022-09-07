import styled from 'styled-components';

const Form = styled.form`
  display: block;
  width: ${(props) => props.$width}px;
  background-color: ${(props) => props.theme.colorGray};
`;

export default Form;
