import * as React from 'react';
import {
  CalendarViews,
  CalendarView,
  DayIndex,
  DaysOfWeek,
  Day,
  Week,
  Month,
  Year,
} from './types';
import { getDay, getWeek, getMonth, getYear } from './utils';
import { addMonths, addDays } from 'date-fns';

type ACTIONTYPE = { type: 'PREV' } | { type: 'NEXT' };

type State =
  | {
      props: { date: Date; view: 'year'; weekStartsOn: DayIndex };
      calendar: Year;
    }
  | {
      props: { date: Date; view: 'month'; weekStartsOn: DayIndex };
      calendar: Month;
    }
  | {
      props: { date: Date; view: 'week'; weekStartsOn: DayIndex };
      calendar: Week;
    }
  | {
      props: { date: Date; view: 'day'; weekStartsOn: DayIndex };
      calendar: Day;
    };

const initialState = {
  props: {
    date: new Date(),
    view: CalendarViews.month,
    weekStartsOn: DaysOfWeek.Sunday,
  },
  calendar: {
    days: [],
    weeks: [],
    months: [],
    years: [],
    
  },
};

function init({
  date,
  view,
  weekStartsOn,
}: {
  date: Date;
  view: CalendarView;
  weekStartsOn: DayIndex;
}) {
  switch (view) {
    case CalendarViews.day: {
      return {
        props: { date, view, weekStartsOn },
        calendar: getDay({ date }),
      };
    }
    case CalendarViews.week: {
      return {
        props: { date, view, weekStartsOn },
        calendar: getWeek({ date, weekStartsOn }),
      };
    }
    case CalendarViews.month: {
      return {
        props: { date, view, weekStartsOn },
        calendar: getMonth({ date, weekStartsOn }),
      };
    }
    case CalendarViews.year: {
      return {
        props: { date, view, weekStartsOn },
        calendar: getYear({ date, weekStartsOn }),
      };
    }
  }
}

function reducer(state: State, action: ACTIONTYPE) {
  switch (action.type) {
    case 'PREV':
    case 'NEXT': {
      switch (state.props.view) {
        case CalendarViews.year: {
          return init({
            ...state.props,
            date: addMonths(
              state.props.date,
              action.type === 'PREV' ? -12 : 12,
            ),
          });
        }
        case CalendarViews.month: {
          return init({
            ...state.props,
            date: addMonths(state.props.date, action.type === 'PREV' ? -1 : 1),
          });
        }
        case CalendarViews.week: {
          return init({
            ...state.props,
            date: addDays(state.props.date, action.type === 'PREV' ? -7 : 7),
          });
        }
        case CalendarViews.day: {
          return init({
            ...state.props,
            date: addDays(state.props.date, action.type === 'PREV' ? -1 : 1),
          });
        }
      }
    }
  }
}

function useCalendar({
  date = new Date(),
  view = CalendarViews.month,
  weekStartsOn = DaysOfWeek.Sunday,
}: {
  date?: Date;
  view?: CalendarView;
  weekStartsOn?: DayIndex;
}) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState,
    function () {
      return init({ date, view, weekStartsOn });
    },
  );

  function next() {
    dispatch({ type: 'NEXT' });
  }

  function prev() {
    dispatch({ type: 'PREV' });
  }

  return [state.calendar, { prev, next }];
}

export default useCalendar;
