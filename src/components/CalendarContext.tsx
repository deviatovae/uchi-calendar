import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import moment from 'moment';

type Event = { date: number };
type Events = { [key: string]: Event };
export const EVENT_KEY_FORMAT = 'YYYY-MM-DD HH'
interface CalendarContextProps {
  setToday: () => void;
  now: moment.Moment;
  week: moment.Moment[];
  weekStart: moment.Moment;
  setWeekStart: (value: moment.Moment) => void;
  addEvent: (date: moment.Moment) => void;
  events: Events;
}

export const CalendarContext = createContext<CalendarContextProps>({
  setToday: () => null,
  now: moment(),
  week: [],
  weekStart: moment(),
  setWeekStart: () => null,
  addEvent: () => null,
  events: {},
});

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const now = moment();
  const [weekStart, setWeekStart] = useState(now.startOf('week'))
  const week = new Array(7).fill(weekStart).map((_, index) => weekStart.clone().add(index, 'day'));
  const [events, setEvents] = useState<Events>({})

  const setToday = useCallback(() => {
    setWeekStart(now)
  }, [now, setWeekStart])

  const addEvent = useCallback((date: moment.Moment) => {
   setEvents((prev) => ({
     ...prev,
     [date.format(EVENT_KEY_FORMAT)]: {
       date: date.valueOf()
     }
  }))
  }, [])

  return (
    <CalendarContext.Provider value={{ setToday, now, week, weekStart, setWeekStart, addEvent, events }}>
      {children}
    </CalendarContext.Provider>
  );
};
