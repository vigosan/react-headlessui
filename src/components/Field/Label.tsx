import React, { useContext } from 'react';
import { Context } from './Context';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const { id } = useContext(Context);

  return <label ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';

export default Label;
