import { useReducer } from 'react';
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
      props: { date: Date; view: CalendarViews.year; weekStartsOn: DayIndex };
      calendar: Year;
    }
  | {
      props: { date: Date; view: CalendarViews.month; weekStartsOn: DayIndex };
      calendar: Month;
    }
  | {
      props: { date: Date; view: CalendarViews.week; weekStartsOn: DayIndex };
      calendar: Week;
    }
  | {
      props: { date: Date; view: CalendarViews.day; weekStartsOn: DayIndex };
      calendar: Day;
    };

function init({
  date,
  view,
  weekStartsOn,
}: {
  date: Date;
  view: CalendarView;
  weekStartsOn: DayIndex;
}): State {
  switch (view) {
    case CalendarViews.day: {
      return {
        props: { date, view: CalendarViews.day, weekStartsOn },
        calendar: getDay({ date }),
      };
    }
    case CalendarViews.week: {
      return {
        props: { date, view: CalendarViews.week, weekStartsOn },
        calendar: getWeek({ date, weekStartsOn }),
      };
    }
    case CalendarViews.year: {
      return {
        props: { date, view: CalendarViews.year, weekStartsOn },
        calendar: getYear({ date, weekStartsOn }),
      };
    }
    default: {
      return {
        props: { date, view: CalendarViews.month, weekStartsOn },
        calendar: getMonth({ date, weekStartsOn }),
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
  const initialState = init({ date, view, weekStartsOn });
  const [state, dispatch] = useReducer(reducer, initialState);

  function next() {
    dispatch({ type: 'NEXT' });
  }

  function prev() {
    dispatch({ type: 'PREV' });
  }

  return [state.calendar, { prev, next }];
}

export default useCalendar;
