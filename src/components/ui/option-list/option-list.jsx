import React from 'react';
import { Ul } from '/src/components/styled';
import { Option, Property, StyledUl } from './styles';

function OptionsList({ list = [], delimeter = ': ' }) {
  return (
    <Ul>
      {list.map((option, index) => (
        <Option key={index}>
          <Property>
            {option.property}
            {delimeter}
          </Property>
          {option.value}
        </Option>
      ))}
    </Ul>
  );
}

export default OptionsList;
