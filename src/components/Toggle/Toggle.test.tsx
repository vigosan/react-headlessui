import React from 'react';
import Toggle from './Toggle';
import { render, fireEvent, screen } from '@testing-library/react';

test('Toggle', function () {
  render(
    <Toggle>
      {({ toggle }: { toggle: () => void }) => (
        <div>
          <Toggle.Off>
            <button onClick={toggle}>I am off</button>
          </Toggle.Off>
          <Toggle.On>
            <h1>I am on</h1>
          </Toggle.On>
        </div>
      )}
    </Toggle>,
  );

  expect(screen.getByText(/I am off/i)).toBeInTheDocument();
  expect(screen.queryByText(/I am on/i)).toBeNull();

  fireEvent.click(screen.getByText(/I am off/i));

  expect(screen.queryByText(/I am off/i)).toBeNull();
  expect(screen.getByText(/I am on/i)).toBeInTheDocument();
});
