import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Provider, ProviderProps, Context } from './Context';

function Calendar(props: ProviderProps) {
  return <Provider {...props} />;
}

function Month({ children }) {
  const { weeks, monthOfYear, prev, next } = useContext(Context);

  return children({ weeks, monthOfYear, prev, next });
}

Calendar.displayName = 'Calendar';
Calendar.Month = Month;
Calendar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Calendar;
