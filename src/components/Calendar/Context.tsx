import React, { createContext, useMemo } from 'react';
import { useId, useCalendar } from '../../hooks';

type ContextProps = {
  id?: string;
};

type ProviderProps = {
  id: string;
  date: Date;
  view: 'year' | 'month' | 'week' | 'day';
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

const Context = createContext<ContextProps>({});

function Provider({
  date = new Date(),
  view = 'month',
  weekStartsOn = 0,
  id: customId,
  ...rest
}: ProviderProps) {
  const id = useId(customId);
  const [calendar, { prev, next }] = useCalendar({ date, view, weekStartsOn });
  const value = useMemo(
    () => ({
      id,
      ...calendar,
      prev,
      next
    }),
    [id, calendar],
  );

  return <Context.Provider value={value} {...rest} />;
}

export type { ContextProps, ProviderProps };
export { Context, Provider };
export default Context;
