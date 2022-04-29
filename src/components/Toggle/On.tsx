import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

function On({ children }: { children: React.ReactElement }) {
  const { on } = useContext(Context);

  return on ? children : null;
}

On.displayName = 'On';
On.propTypes = {
  children: PropTypes.node,
};

export default On;
