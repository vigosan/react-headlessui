import React from 'react';
import Calendar from './Calendar';

export function Default() {
  return (
    <Calendar id="birthDate" weekStartsOn={1}>
      <Calendar.Month>
        {({ monthOfYear, weeks, prev, next }) => (
          <table>
            <thead>
              <tr>
                <th colSpan={7}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      onClick={prev}
                      style={{
                        border: '0',
                        background: 'transparent',
                        fontSize: '20px',
                        cursor: 'pointer',
                      }}
                    >
                      &laquo;
                    </button>
                    {monthOfYear}
                    <button
                      onClick={next}
                      style={{
                        border: '0',
                        background: 'transparent',
                        fontSize: '20px',
                        cursor: 'pointer',
                      }}
                    >
                      &raquo;
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((week) => (
                <tr key={week.weekOfYear} style={{ border: '1px solid black' }}>
                  {week.days.map((day) => (
                    <td
                      key={day.dayOfMonth}
                      style={{
                        border: '1px solid black',
                        padding: '8px',
                        background: day.isWeekend ? '#f1f5f9' : '#fff',
                        color: day.isToday ? '#ff0000' : '#000',
                      }}
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
