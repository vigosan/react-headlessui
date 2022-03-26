import React from 'react';
import Calendar from './Calendar';

export function Default() {
  return (
    <Calendar id="birthDate" weekStartsOn={1}>
      <Calendar.Month>
        {({ monthOfYear, weeks }) => (
          <table>
            <thead>
              <tr>
                <th colSpan={7}>{monthOfYear}</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((week) => (
                <tr key={week.weekOfYear} style={{ border: '1px solid black' }}>
                  {week.days.map((day) => (
                    <td
                      key={day.dayOfMonth}
                      style={{ border: '1px solid black' }}
                    >
                      {day.dayOfMonth}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Calendar.Month>
    </Calendar>
  );
}

export default {
  title: 'Calendar',
};
