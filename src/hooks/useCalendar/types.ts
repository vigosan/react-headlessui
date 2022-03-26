export type DAY_INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CALENDAR_VIEW = 'year' | 'month' | 'week' | 'day';
export type ACTION_TYPE =
  | { type: 'SET_DATE', date: Date }
  | { type: 'NEXT' }
  | { type: 'PREV' };

export interface Year {
  year: number;
  months: Month[];
  isCurrent: boolean;
  isLeap: boolean;
}

export interface Month {
  monthOfYear: string;
  daysInMonth: number;
  isCurrent: boolean;
  weeks: Week[];
}

export interface Week {
  weekOfYear: number;
  isCurrent: boolean;
  days: Day[];
}

export interface Day {
  dayOfMonth: number;
  dayOfWeek: string;
  dayOfYear: number;
  isToday: boolean;
  isWeekend: boolean;
}