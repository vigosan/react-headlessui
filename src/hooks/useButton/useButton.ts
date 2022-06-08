import React from 'react';

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

export default useButton;
