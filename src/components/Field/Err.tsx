import React, { useContext } from 'react';
import { Context } from './Context';

const Err = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>((props, ref) => {
  const { id } = useContext(Context);

  return <span ref={ref} id={`${id}Des`} {...props} />;
});

Err.displayName = 'Field.Error';

export default Err;
