import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} type="button" {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
