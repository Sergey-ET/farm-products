import styled from 'styled-components';

export const StyledMessage = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  background: #ffffff;
  border: 2px solid rgba(217, 30, 24, 0.5);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;
