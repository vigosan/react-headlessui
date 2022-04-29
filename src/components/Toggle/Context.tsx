import React, { createContext, useState, useMemo } from 'react';

interface ContextProps {
  on: boolean;
  setOn: (on: boolean) => void;
  toggle: () => void;
}

type ProviderProps = {
  children: React.ReactNode | ((value: ContextProps) => React.ReactNode);
  defaultValue?: boolean;
};

const Context = createContext<ContextProps>({
  on: false,
  setOn: () => {},
  toggle: () => {},
});

function Provider({ children, defaultValue = false }: ProviderProps) {
  const [on, setOn] = useState(defaultValue);

  function toggle() {
    setOn((on) => !on);
  }

  const value = useMemo(
    () => ({
      on,
      setOn,
      toggle,
    }),
    [on, setOn, toggle],
  );

  return (
    <Context.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </Context.Provider>
  );
}

export type { ContextProps, ProviderProps };
export { Context, Provider };
export default Context;
