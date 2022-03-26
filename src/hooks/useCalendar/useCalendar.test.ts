import { renderHook } from '@testing-library/react-hooks';
import useCalendar from './useCalendar';

describe('useCalendar', function () {
  test('month', function () {
    const thatDay =
      'Sun Mar 20 2022 19:45:00 GMT+0100 (Central European Standard Time)';
    const date = new Date(thatDay);
    const { result } = renderHook(() =>
      useCalendar({ date, type: 'month', weekStartsOn: 0 }),
    );
    const [month] = result.current;

    expect(month).toEqual({
      monthOfYear: 'March',
      daysInMonth: 31,
      isCurrent: true,
      weeks: [
        {
          weekOfYear: 10,
          isCurrent: false,
          days: [
            {
              date: new Date('2022-02-26T23:00:00.000Z'),
              dayOfWeek: 'Sunday',
              dayOfMonth: 27,
              dayOfYear: 58,
              isToday: false,
              isWeekend: true,
            },
            {
              date: new Date('2022-02-27T23:00:00.000Z'),
              dayOfWeek: 'Monday',
              dayOfMonth: 28,
              dayOfYear: 59,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-02-28T23:00:00.000Z'),
              dayOfWeek: 'Tuesday',
              dayOfMonth: 1,
              dayOfYear: 60,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-01T23:00:00.000Z'),
              dayOfWeek: 'Wednesday',
              dayOfMonth: 2,
              dayOfYear: 61,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-02T23:00:00.000Z'),
              dayOfWeek: 'Thursday',
              dayOfMonth: 3,
              dayOfYear: 62,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-03T23:00:00.000Z'),
              dayOfWeek: 'Friday',
              dayOfMonth: 4,
              dayOfYear: 63,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-04T23:00:00.000Z'),
              dayOfWeek: 'Saturday',
              dayOfMonth: 5,
              dayOfYear: 64,
              isToday: false,
              isWeekend: true,
            },
          ],
        },
        {
          weekOfYear: 11,
          isCurrent: false,
          days: [
            {
              date: new Date('2022-03-05T23:00:00.000Z'),
              dayOfWeek: 'Sunday',
              dayOfMonth: 6,
              dayOfYear: 65,
              isToday: false,
              isWeekend: true,
            },
            {
              date: new Date('2022-03-06T23:00:00.000Z'),
              dayOfWeek: 'Monday',
              dayOfMonth: 7,
              dayOfYear: 66,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-07T23:00:00.000Z'),
              dayOfWeek: 'Tuesday',
              dayOfMonth: 8,
              dayOfYear: 67,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-08T23:00:00.000Z'),
              dayOfWeek: 'Wednesday',
              dayOfMonth: 9,
              dayOfYear: 68,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-09T23:00:00.000Z'),
              dayOfWeek: 'Thursday',
              dayOfMonth: 10,
              dayOfYear: 69,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-10T23:00:00.000Z'),
              dayOfWeek: 'Friday',
              dayOfMonth: 11,
              dayOfYear: 70,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-11T23:00:00.000Z'),
              dayOfWeek: 'Saturday',
              dayOfMonth: 12,
              dayOfYear: 71,
              isToday: false,
              isWeekend: true,
            },
          ],
        },
        {
          weekOfYear: 12,
          isCurrent: false,
          days: [
            {
              date: new Date('2022-03-12T23:00:00.000Z'),
              dayOfWeek: 'Sunday',
              dayOfMonth: 13,
              dayOfYear: 72,
              isToday: false,
              isWeekend: true,
            },
            {
              date: new Date('2022-03-13T23:00:00.000Z'),
              dayOfWeek: 'Monday',
              dayOfMonth: 14,
              dayOfYear: 73,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-14T23:00:00.000Z'),
              dayOfWeek: 'Tuesday',
              dayOfMonth: 15,
              dayOfYear: 74,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-15T23:00:00.000Z'),
              dayOfWeek: 'Wednesday',
              dayOfMonth: 16,
              dayOfYear: 75,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-16T23:00:00.000Z'),
              dayOfWeek: 'Thursday',
              dayOfMonth: 17,
              dayOfYear: 76,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-17T23:00:00.000Z'),
              dayOfWeek: 'Friday',
              dayOfMonth: 18,
              dayOfYear: 77,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-18T23:00:00.000Z'),
              dayOfWeek: 'Saturday',
              dayOfMonth: 19,
              dayOfYear: 78,
              isToday: false,
              isWeekend: true,
            },
          ],
        },
        {
          weekOfYear: 13,
          isCurrent: true,
          days: [
            {
              date: new Date('2022-03-19T23:00:00.000Z'),
              dayOfWeek: 'Sunday',
              dayOfMonth: 20,
              dayOfYear: 79,
              isToday: false,
              isWeekend: true,
            },
            {
              date: new Date('2022-03-20T23:00:00.000Z'),
              dayOfWeek: 'Monday',
              dayOfMonth: 21,
              dayOfYear: 80,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-21T23:00:00.000Z'),
              dayOfWeek: 'Tuesday',
              dayOfMonth: 22,
              dayOfYear: 81,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-22T23:00:00.000Z'),
              dayOfWeek: 'Wednesday',
              dayOfMonth: 23,
              dayOfYear: 82,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-23T23:00:00.000Z'),
              dayOfWeek: 'Thursday',
              dayOfMonth: 24,
              dayOfYear: 83,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-24T23:00:00.000Z'),
              dayOfWeek: 'Friday',
              dayOfMonth: 25,
              dayOfYear: 84,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-25T23:00:00.000Z'),
              dayOfWeek: 'Saturday',
              dayOfMonth: 26,
              dayOfYear: 85,
              isToday: true,
              isWeekend: true,
            },
          ],
        },
        {
          weekOfYear: 14,
          isCurrent: false,
          days: [
            {
              date: new Date('2022-03-26T23:00:00.000Z'),
              dayOfWeek: 'Sunday',
              dayOfMonth: 27,
              dayOfYear: 86,
              isToday: false,
              isWeekend: true,
            },
            {
              date: new Date('2022-03-27T22:00:00.000Z'),
              dayOfWeek: 'Monday',
              dayOfMonth: 28,
              dayOfYear: 87,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-28T22:00:00.000Z'),
              dayOfWeek: 'Tuesday',
              dayOfMonth: 29,
              dayOfYear: 88,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-29T22:00:00.000Z'),
              dayOfWeek: 'Wednesday',
              dayOfMonth: 30,
              dayOfYear: 89,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-30T22:00:00.000Z'),
              dayOfWeek: 'Thursday',
              dayOfMonth: 31,
              dayOfYear: 90,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-03-31T22:00:00.000Z'),
              dayOfWeek: 'Friday',
              dayOfMonth: 1,
              dayOfYear: 91,
              isToday: false,
              isWeekend: false,
            },
            {
              date: new Date('2022-04-01T22:00:00.000Z'),
              dayOfWeek: 'Saturday',
              dayOfMonth: 2,
              dayOfYear: 92,
              isToday: false,
              isWeekend: true,
            },
          ],
        },
      ],
    });
  });

  test('day', function () {
    const thatDay =
      'Sun Mar 20 2022 19:45:00 GMT+0100 (Central European Standard Time)';
    const date = new Date(thatDay);
    const { result } = renderHook(() =>
      useCalendar({ date, type: 'day', weekStartsOn: 0 }),
    );
    const [day] = result.current;

    expect(day).toEqual({
      date: new Date('2022-03-20T18:45:00.000Z'),
      dayOfMonth: 20,
      dayOfWeek: 'Sunday',
      dayOfYear: 79,
      isToday: false,
      isWeekend: true,
    });
  });
});
