import React from 'react';
import PropTypes from 'prop-types';
import { useButton } from '../../hooks';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  as?: React.ElementType;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ as: Element = 'button', children, onClick, ...rest }, ref) => {
    const { a11yProps, htmlProps } = useButton({ as: Element, onClick });

    return (
      <Element ref={ref} {...a11yProps} {...htmlProps} {...rest}>
        {children}
      </Element>
    );
  },
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
