import React from 'react';
import PropTypes from 'prop-types';
import { Provider, ProviderProps } from './Context';
import Input from './Input';
import Label from './Label';
import Err from './Err';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Err: typeof Err;
}

const Field: React.FC<ProviderProps> & FieldComposition = ({ id, ...rest }) => {
  return <Provider id={id} {...rest} />;
};

Field.displayName = 'Field';
Field.Label = Label;
Field.Input = Input;
Field.Error = Err;
Field.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Field;
