import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import moment from 'moment';

interface CalendarContextProps {
  setToday: () => void,
  now: moment.Moment,
  week: moment.Moment[],
  weekStart: moment.Moment,
  setWeekStart: (value: moment.Moment) => void,
}
export const CalendarContext = createContext<CalendarContextProps>({
  setToday: () => null,
  now: moment(),
  week: [],
  weekStart: moment(),
  setWeekStart: () => null
});

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const now = moment();
  const [weekStart, setWeekStart] = useState(now.startOf('week'))
  const week = new Array(7).fill(weekStart).map((_, index) => weekStart.clone().add(index, 'day'));

  const setToday = useCallback(() => {
    setWeekStart(now)
  }, [now, setWeekStart])

  return (
    <CalendarContext.Provider value={{ setToday, now, week, weekStart, setWeekStart }}>
      {children}
    </CalendarContext.Provider>
  );
};
