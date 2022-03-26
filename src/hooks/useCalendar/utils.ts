import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  getDate,
  getWeek as getWeekFn,
  getDayOfYear,
  getDaysInMonth,
  isLeapYear,
  isSameDay,
  isSameMonth,
  isSameWeek,
  isSameYear,
  isWeekend,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from 'date-fns';
import { Year, Month, Week, Day, DAY_INDEX } from './types';

function getDay({ date }: { date: Date }): Day {
  return {
    dayOfWeek: format(date, 'EEEE'),
    dayOfMonth: getDate(date),
    dayOfYear: getDayOfYear(date),
    isToday: isSameDay(date, new Date()),
    isWeekend: isWeekend(date),
  };
}

function getWeek({ date }: { date: Date }): Week {
  let currentDate = date;
  const days = [];

  for (let day = 0; day < 7; day++) {
    days.push(getDay({ date: currentDate }));
    currentDate = addDays(currentDate, 1);
  }

  return {
    weekOfYear: getWeekFn(date),
    isCurrent: isSameWeek(date, new Date()),
    days,
  };
}

function getWeeksOfMonth({
  date,
  weekStartsOn,
}: {
  date: Date;
  weekStartsOn: DAY_INDEX;
}): Week[] {
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);
  const firstDay = startOfWeek(firstDayOfMonth, { weekStartsOn });
  const lastDay = endOfWeek(lastDayOfMonth, { weekStartsOn });
  const weeks = [];

  let currentDate = firstDay;
  while (currentDate <= lastDay) {
    weeks.push(getWeek({ date: currentDate }));
    currentDate = addDays(currentDate, 7);
  }

  return weeks;
}

function getMonth({
  date,
  weekStartsOn,
}: {
  date: Date;
  weekStartsOn: DAY_INDEX;
}): Month {
  return {
    monthOfYear: format(date, 'LLLL'),
    daysInMonth: getDaysInMonth(date),
    isCurrent: isSameMonth(date, new Date()),
    weeks: getWeeksOfMonth({ date, weekStartsOn }),
  };
}

function getYear({
  date,
  weekStartsOn,
}: {
  date: Date;
  weekStartsOn: DAY_INDEX;
}): Year {
  const months = [];

  let currentDate = startOfYear(date);
  for (let month = 0; month < 12; month++) {
    months.push(getMonth({ date: currentDate, weekStartsOn }));
    currentDate = addMonths(currentDate, 1);
  }

  return {
    year: date.getFullYear(),
    months,
    isCurrent: isSameYear(date, new Date()),
    isLeap: isLeapYear(date),
  };
}

export { getYear, getMonth, getWeek, getDay };
