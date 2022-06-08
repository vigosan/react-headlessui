import React, { useContext } from 'react';
import { Context } from './Context';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const { id, isInvalid } = useContext(Context);

  // TODO move logic to useInput
  return (
    <input
      ref={ref}
      id={id}
      {...(isInvalid && {
        'aria-invalid': true,
        'aria-describedby': `${id}Des`,
      })}
      {...props}
    />
  );
});

Input.displayName = 'Field.Input';

export default Input;
