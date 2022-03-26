import { useReducer } from 'react';
import { getYear, getMonth, getWeek, getDay } from './utils';
import {
  CALENDAR_TYPE,
  ACTION_TYPE,
  DAY_INDEX,
  Year,
  Month,
  Week,
  Day,
} from './types';

const initialState = {};

function init({
  date,
  type,
  weekStartsOn,
}: {
  date: Date;
  type: CALENDAR_TYPE;
  weekStartsOn: DAY_INDEX;
}): Year | Month | Week | Day {
  switch (type) {
    case 'year': {
      return getYear({ date, weekStartsOn }) as Year;
    }
    case 'month': {
      return getMonth({ date, weekStartsOn }) as Month;
    }
    case 'week': {
      return getWeek({ date }) as Week;
    }
    case 'day': {
      return getDay({ date }) as Day;
    }
  }
}

function reducer(state: typeof initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case 'SET_DATE':
      return state;
    case 'NEXT':
      return state;
    case 'PREV':
      return state;
    default:
      return state;
  }
}

function useCalendar({
  date = new Date(),
  type = 'month',
  weekStartsOn = 0,
}: {
  date: Date;
  type: CALENDAR_TYPE;
  weekStartsOn: DAY_INDEX;
}) {
  const [state] = useReducer(reducer, initialState, function () {
    return init({ date, type, weekStartsOn });
  });

  return [state];
}

export default useCalendar;
