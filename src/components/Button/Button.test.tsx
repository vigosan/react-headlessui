import React from 'react';
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('button', async function () {
  render(<Button>Click me!</Button>);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(await axe(button)).toHaveNoViolations();
});

test('button as a div', async function () {
  render(<Button as="div">Click me!</Button>);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(await axe(button)).toHaveNoViolations();
  expect(button).toMatchInlineSnapshot(`
    <div
      role="button"
      tabindex="0"
    >
      Click me!
    </div>
  `);
});

test('button as a link', async function () {
  render(<Button as="a">Click me!</Button>);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(await axe(button)).toHaveNoViolations();
  expect(button).toMatchInlineSnapshot(`
    <a
      href="#"
      role="button"
    >
      Click me!
    </a>
  `);
});
