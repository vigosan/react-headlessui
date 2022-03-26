import React, { useContext } from 'react';
import { Context } from './Context';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const { id } = useContext(Context);

  return <input ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';

export default Input;
