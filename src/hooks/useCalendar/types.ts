export interface Day {
  dayIndex: number;
  dayOfMonth: number;
  dayOfWeek: string;
  dayOfYear: number;
  isSameMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

export interface Week {
  days: Day[];
  isCurrent: boolean;
  weekOfYear: number;
}

export interface Month {
  isCurrent: boolean;
  monthIndex: number;
  monthOfYear: string;
  weeks: Week[];
}

export interface Year {
  isCurrent: boolean;
  isLeap: boolean;
  months: Month[];
  year: number;
}

export enum DaysOfWeek {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export enum MonthOfYear {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export enum Formats {
  long = 'long',
  short = 'short',
}

export enum DayFormats {
  long = 'EEEE',
  short = 'EEEEEE',
}

export enum MonthFormats {
  long = 'LLLL',
  short = 'LLL',
}

export enum CalendarViews {
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year',
}

export type DayIndex = typeof DaysOfWeek[keyof typeof DaysOfWeek];
export type Format = keyof typeof Formats;
export type CalendarView = keyof typeof CalendarViews;
