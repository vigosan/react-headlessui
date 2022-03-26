import React, { createContext, useMemo } from 'react';
import { useId, useCalendar } from '../../hooks';

type ContextProps = {
  id?: string;
};

type ProviderProps = {
  id: string;
  date: Date;
  type: 'year' | 'month' | 'week' | 'day';
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

const Context = createContext<ContextProps>({});

function Provider({
  date = new Date(),
  type = 'month',
  weekStartsOn = 0,
  id: customId,
  ...rest
}: ProviderProps) {
  const id = useId(customId);
  const [calendar] = useCalendar({ date, type, weekStartsOn });

  const value = useMemo(
    () => ({
      id,
      ...calendar,
    }),
    [id, calendar],
  );

  return <Context.Provider value={value} {...rest} />;
}

export type { ContextProps, ProviderProps };
export { Context, Provider };
export default Context;
