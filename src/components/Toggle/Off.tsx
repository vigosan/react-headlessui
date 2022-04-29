import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

function Off({ children }: { children: React.ReactElement }) {
  const { on } = useContext(Context);

  return on ? null : children;
}

Off.displayName = 'Off';
Off.propTypes = {
  children: PropTypes.node,
};

export default Off;
