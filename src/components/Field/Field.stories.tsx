import React from 'react';
import Field from './Field';

export const Default = () => {
  return (
    <Field id="firstName">
      <Field.Label>First Name</Field.Label>
      <Field.Input />
      <Field.Error>Is required</Field.Error>
    </Field>
  );
};

export default {
  title: 'Field',
};
