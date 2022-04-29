import React from 'react';
import PropTypes from 'prop-types';
import { Provider, ProviderProps } from './Context';
import On from './On';
import Off from './Off';

interface FieldComposition {
  On: typeof On;
  Off: typeof Off;
}

const Toggle: React.FC<ProviderProps> & FieldComposition = ({
  defaultValue,
  ...rest
}) => {
  return <Provider defaultValue={defaultValue} {...rest} />;
};

Toggle.displayName = 'Toggle';
Toggle.On = On;
Toggle.Off = Off;
Toggle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Toggle;
