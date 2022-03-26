import React from 'react';
import { Story, Meta } from '@storybook/react';
import Field from './Field';

export default {
  title: 'Components/Field',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label },
} as Meta;

export const Default: Story = () => {
  return (
    <Field id="firstName">
      <Field.Label>First Name</Field.Label>
      <Field.Input />
    </Field>
  );
};
