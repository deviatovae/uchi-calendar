import styled from 'styled-components';
import theme from '../theme.ts';
import moment from 'moment';
import { useCalendarContext } from './CalendarContext.tsx';
import { useCallback } from 'react';
import { EVENT_KEY_FORMAT, FORMAT } from '../consts.ts';

const CellItem = styled.div`
  display: flex;
  aspect-ratio: 1 / 1;
`;

const ECell = styled(CellItem)`
  border-right: solid 1px ${theme.colors.bgSecondary};
  border-bottom: solid 1px ${theme.colors.bgSecondary};
  padding: 2px;
`;

const Content = styled.span<{ hasEvent: boolean, isSelected: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ hasEvent, isSelected }) => isSelected
          ? `${theme.colors.bgCellsHover}`
          : hasEvent ?
                  `${theme.colors.bgCells}`
                  : ''};

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.bgCells};
    background-color: ${({ hasEvent }) => hasEvent ? `${theme.colors.bgCellsHover}` : `${theme.colors.bgCells}`};
  }
`;

const TCell = styled(CellItem)`
  display: flex;
  align-items: start;
  justify-content: end;
`;

const Time = styled.span`
  width: 100%;
  text-align: center;
  color: ${theme.colors.textSecondary};
  margin-top: -10px;
`;

interface EventCellProps {
  dateTime: moment.Moment;
}

export const EventCell = ({ dateTime }: EventCellProps) => {
  const { events, selectEvent, selectedEvent, addEvent } = useCalendarContext();
  const key = dateTime.format(EVENT_KEY_FORMAT);
  const event = events[key];
  const isSelected = key === selectedEvent;

  const handleClick = useCallback(() => {
    if (event) {
      selectEvent(key);
      return;
    }

    const shouldAddEvent = confirm(`Want to add an event at ${dateTime.format(FORMAT)}?`);
    if (shouldAddEvent) {
      addEvent(dateTime);
    }

  }, [event, dateTime, selectEvent, key, addEvent]);

  return (
    <ECell>
      <Content hasEvent={!!event} isSelected={isSelected} onClick={handleClick} />
    </ECell>
  );
};

interface TimeCellProps {
  hour: number;
}

export const TimeCell = ({ hour }: TimeCellProps) => {
  return (
    <TCell>
      <Time>{hour.toString().padStart(2, '0')}:00</Time>
    </TCell>
  );
};
