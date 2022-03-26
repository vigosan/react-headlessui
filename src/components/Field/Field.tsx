import React from 'react';
import PropTypes from 'prop-types';
import { Provider, ProviderProps } from './Context';
import Input from './Input';
import Label from './Label';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

const Field: React.FC<ProviderProps> & FieldComposition = ({ id, ...rest }) => {
  return <Provider id={id} {...rest} />;
};

Field.displayName = 'Field';
Field.Label = Label;
Field.Input = Input;
Field.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Field;
