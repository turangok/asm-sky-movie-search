import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './Input.styles';

export const Input = ({ register, required, maxLength, ...restProps }) => {
  return (
    <StyledInput
      data-testid="inputId"
      ref={register && register({ required, maxLength })}
      {...restProps}
    />
  );
};

Input.propTypes = {
  register: PropTypes.func,
  required: PropTypes.bool,
  maxLength: PropTypes.string,
};
