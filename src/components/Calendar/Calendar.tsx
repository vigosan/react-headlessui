import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Provider, ProviderProps, Context } from './Context';

function Calendar({ id, ...rest }: ProviderProps) {
  return <Provider id={id} {...rest} />;
}

function Month({ children }) {
  const { weeks, monthOfYear } = useContext(Context);

  return children({ weeks, monthOfYear });
}

Calendar.displayName = 'Calendar';
Calendar.Month = Month;
Calendar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Calendar;
