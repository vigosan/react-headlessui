import React, { createContext, useMemo } from 'react';
import { useId } from '../../hooks';

type ContextProps = {
  id?: string;
};

type ProviderProps = {
  id?: string;
  children: React.ReactNode;
};

const Context = createContext<ContextProps>({});

function Provider({ id: customId, ...rest }: ProviderProps) {
  const id = useId(customId);

  const value = useMemo(
    () => ({
      id,
    }),
    [id],
  );

  return <Context.Provider value={value} {...rest} />;
}

export type { ContextProps, ProviderProps };
export { Context, Provider };
export default Context;
