// @ts-nocheck
import { useReducer } from 'react';
import { getYear, getMonth, getWeek, getDay } from './utils';
import { addMonths, addDays } from 'date-fns';
import { CALENDAR_VIEW, ACTION_TYPE, DAY_INDEX } from './types';

const initialState = {};

function init({
  date,
  view,
  weekStartsOn,
}: {
  date: Date;
  view: CALENDAR_VIEW;
  weekStartsOn: DAY_INDEX;
}) {
  switch (view) {
    case 'year': {
      return { date, weekStartsOn, view, ...getYear({ date, weekStartsOn }) };
    }
    case 'month': {
      return { date, weekStartsOn, view, ...getMonth({ date, weekStartsOn }) };
    }
    case 'week': {
      return { date, weekStartsOn, view, ...getWeek({ date }) };
    }
    case 'day': {
      return { date, weekStartsOn, view, ...getDay({ date }) };
    }
  }
}

function reducer(state: typeof initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case 'NEXT': {
      switch (state.view) {
        case 'year': {
          return init({ ...state, date: addMonths(state.date, 12) });
        }
        case 'month': {
          return init({ ...state, date: addMonths(state.date, 1) });
        }
        case 'week': {
          return init({ ...state, date: addDays(state.date, 7) });
        }
        case 'day': {
          return init({ ...state, date: addDays(state.date, 1) });
        }
      }
    }
    case 'PREV': {
      switch (state.view) {
        case 'year': {
          return init({ ...state, date: addMonths(state.date, -12) });
        }
        case 'month': {
          return init({ ...state, date: addMonths(state.date, -1) });
        }
        case 'week': {
          return init({ ...state, date: addDays(state.date, -7) });
        }
        case 'day': {
          return init({ ...state, date: addDays(state.date, -1) });
        }
      }
    }
  }
}

function useCalendar({
  date = new Date(),
  view = 'month',
  weekStartsOn = 0,
}: {
  date: Date;
  view: CALENDAR_VIEW;
  weekStartsOn: DAY_INDEX;
}) {
  const [state, dispatch] = useReducer(reducer, initialState, function () {
    return init({ date, view, weekStartsOn });
  });

  function next() {
    dispatch({ type: 'NEXT' });
  }

  function prev() {
    dispatch({ type: 'PREV' });
  }

  return [
    state,
    {
      next,
      prev,
    },
  ];
}

export default useCalendar;
