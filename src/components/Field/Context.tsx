import React, { createContext, useRef, useMemo, Children } from 'react';
import Err from './Err';
import { useId } from '../../hooks';

type ContextProps = {
  id?: string;
  isInvalid: boolean;
};

type ProviderProps = {
  id?: string;
  children: React.ReactNode;
};

const Context = createContext<ContextProps>({});

function Provider({ id: customId, children, ...rest }: ProviderProps) {
  const id = useId(customId);
  const isInvalid = useRef();
  isInvalid.current = !!React.Children.toArray(children).find(
    (child) => child.type === Err,
  );

  const value = useMemo(
    () => ({
      id,
      isInvalid: isInvalid.current,
    }),
    [id],
  );

  return (
    <Context.Provider value={value} {...rest}>
      {children}
    </Context.Provider>
  );
}

export type { ContextProps, ProviderProps };
export { Context, Provider };
export default Context;
