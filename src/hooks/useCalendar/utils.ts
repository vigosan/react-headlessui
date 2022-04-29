import {
  addDays as addDaysFn,
  addMonths as addMonthsFn,
  eachDayOfInterval as eachDayOfIntervalFn,
  eachMonthOfInterval as eachMonthOfIntervalFn,
  eachWeekOfInterval as eachWeekOfIntervalFn,
  endOfMonth as endOfMonthFn,
  endOfWeek as endOfWeekFn,
  endOfYear as endOfYearFn,
  format as formatFn,
  getDate as getDateFn,
  getDayOfYear as getDayOfYearFn,
  getMonth as getMonthFn,
  getWeek as getWeekFn,
  isLeapYear as isLeapYearFn,
  isSameDay as isSameDayFn,
  isSameMonth as isSameMonthFn,
  isSameWeek as isSameWeekFn,
  isSameYear as isSameYearFn,
  isWeekend as isWeekendFn,
  startOfMonth as startOfMonthFn,
  startOfWeek as startOfWeekFn,
  startOfYear as startOfYearFn,
} from 'date-fns';

import {
  Day,
  DayFormats,
  DayIndex,
  DaysOfWeek,
  Format,
  Month,
  MonthFormats,
  Week,
  Year,
} from './types';

export function getDayNames({
  weekStartsOn = DaysOfWeek.Sunday,
  format = 'long',
}: { weekStartsOn?: DayIndex; format?: Format } = {}) {
  const firstDayOfWeek = startOfWeekFn(new Date(), { weekStartsOn });

  return Array.from(Array(7)).map((_, i) =>
    formatFn(addDaysFn(firstDayOfWeek, i), DayFormats[format]),
  );
}

export function getMonthNames({ format = 'long' }: { format?: Format } = {}) {
  const firstDayOfYear = startOfYearFn(new Date());

  return Array.from(Array(12)).map((_, i) =>
    formatFn(addMonthsFn(firstDayOfYear, i), MonthFormats[format]),
  );
}

export function getDay({
  date,
  currentMonth = new Date(),
}: {
  date: Date;
  currentMonth?: Date;
}): Day {
  const now = new Date();
  const dayIndex = date.getDay();

  return {
    dayIndex,
    dayOfMonth: getDateFn(date),
    dayOfWeek: formatFn(date, 'EEEE'),
    dayOfYear: getDayOfYearFn(date),
    isSameMonth: isSameMonthFn(date, currentMonth),
    isToday: isSameDayFn(date, now),
    isWeekend: isWeekendFn(date),
  };
}

export function getWeek({
  date,
  weekStartsOn = DaysOfWeek.Sunday,
  currentMonth = new Date(),
}: {
  date: Date;
  weekStartsOn?: DayIndex;
  currentMonth?: Date;
}): Week {
  const now = new Date();
  const start = startOfWeekFn(date, { weekStartsOn });
  const end = endOfWeekFn(date, { weekStartsOn });
  const days = eachDayOfIntervalFn({
    start,
    end,
  }).map((d) => getDay({ date: d, currentMonth }));

  return {
    days,
    isCurrent: isSameWeekFn(date, now),
    weekOfYear: getWeekFn(date),
  };
}

export function getMonth({
  date,
  weekStartsOn = DaysOfWeek.Sunday,
}: {
  date: Date;
  weekStartsOn?: DayIndex;
}): Month {
  const now = new Date();
  const firstDayOfMonth = startOfMonthFn(date);
  const lastDayOfMonth = endOfMonthFn(date);
  const weeks = eachWeekOfIntervalFn(
    {
      start: firstDayOfMonth,
      end: lastDayOfMonth,
    },
    { weekStartsOn },
  ).map((d) => getWeek({ date: d, weekStartsOn, currentMonth: date }));

  return {
    isCurrent: isSameMonthFn(date, now),
    monthIndex: getMonthFn(date),
    monthOfYear: formatFn(date, 'LLLL'),
    weeks,
  };
}

export function getYear({
  date,
  weekStartsOn = DaysOfWeek.Sunday,
}: {
  date: Date;
  weekStartsOn?: DayIndex;
}): Year {
  const now = new Date();
  const start = startOfYearFn(date);
  const end = endOfYearFn(date);
  const months = eachMonthOfIntervalFn({
    start,
    end,
  }).map((d) => getMonth({ date: d, weekStartsOn }));

  return {
    isCurrent: isSameYearFn(date, now),
    isLeap: isLeapYearFn(date),
    months,
    year: date.getFullYear(),
  };
}
