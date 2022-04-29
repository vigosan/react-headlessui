import { getDayNames, getMonthNames } from './utils';

describe('getDayNames', function () {
  it('long day names', function () {
    expect(getDayNames()).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);

    expect(getDayNames({ weekStartsOn: 1 })).toEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  it('short day names', function () {
    expect(getDayNames({ format: 'short' })).toEqual([
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
    ]);
  });
});

describe('getMonthNames', function () {
  it('long month names', function () {
    expect(getMonthNames()).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('short month names', function () {
    expect(getMonthNames({ format: 'short' })).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });
});
