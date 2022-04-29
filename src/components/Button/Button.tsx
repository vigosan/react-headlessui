import React from 'react';
import PropTypes from 'prop-types';

function handleOnKeyDown(
  evt: React.KeyboardEvent<HTMLButtonElement>,
  cb?: () => void,
) {
  if (evt.key !== 'Enter' && evt.key !== ' ') {
    return;
  }

  typeof cb === 'function' && cb();
}

function useButton({
  as,
  onClick,
}: {
  as: React.ElementType;
  onClick?: () => void;
}) {
  switch (as) {
    case 'div': {
      return {
        htmlProps: {
          tabIndex: 0,
          role: 'button',
          ...(typeof onClick === 'function' && {
            onKeyDown: (evt: React.KeyboardEvent<HTMLButtonElement>) =>
              handleOnKeyDown(evt, onClick),
            onClick,
          }),
        },
        a11yProps: {},
      };
    }
    case 'a': {
      return {
        htmlProps: {
          href: '#',
          role: 'button',
          ...(typeof onClick === 'function' && {
            onKeyDown: (evt: React.KeyboardEvent<HTMLButtonElement>) =>
              handleOnKeyDown(evt, onClick),
            onClick,
          }),
        },
        a11yProps: {},
      };
    }
    default: {
      return {
        htmlProps: {
          type: 'button',
          ...(typeof onClick === 'function' && { onClick }),
        },
        a11yProps: {},
      };
    }
  }
}

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
