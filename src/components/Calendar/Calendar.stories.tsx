import React from 'react';
import { Story, Meta } from '@storybook/react';
import Calendar from './Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as Meta;

export const Default: Story = () => {
  return (
    <Calendar id="birthDate">
      <Calendar.Month>
        {({ monthOfYear, weeks }) => (
          <table>
            <tr>
              <th colSpan={7}>{monthOfYear}</th>
            </tr>

            {weeks.map((week) => (
              <tr key={week.weekOfYear} style={{ border: '1px solid black' }}>
                {week.map((day) => (
                  <td
                    key={week.weekOfYear}
                    style={{ border: '1px solid black' }}
                  >
                    {day.dayOfMonth}
                  </td>
                ))}
              </tr>
            ))}
          </table>
        )}
      </Calendar.Month>
    </Calendar>
  );
};
