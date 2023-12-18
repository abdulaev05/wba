import React, { FC, useState } from 'react';
import Select from 'react-select';

type SimpleSelectType = {
  options: {
    value: string;
    label: string;
  }[];
  id: string;
  placeholder: string;
};

const SimpleSelect: FC<SimpleSelectType> = ({ options, ...props }) => {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      isClearable={true}
      placeholder={'placeholder'}
      className="simple_select__container"
      classNamePrefix="simple_select"
      id="hi"
    />
  );
};

export default SimpleSelect;
