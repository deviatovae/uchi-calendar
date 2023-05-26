import styled from 'styled-components';
import theme from '../theme.ts';
import moment from 'moment';
import { EVENT_KEY_FORMAT, useCalendarContext } from './CalendarContext.tsx';

const CellItem = styled.div`
  display: flex;
  aspect-ratio: 1 / 1;
`;

const ECell = styled(CellItem)`
  border-right: solid 1px ${theme.colors.bgSecondary};
  border-bottom: solid 1px ${theme.colors.bgSecondary};
  padding: 2px;
`;

const Content = styled.span<{ hasEvent: boolean}>`
  width: 100%;
  height: 100%;
  background-color: ${({ hasEvent }) => hasEvent ? `${theme.colors.bgCells}` : ''};
  
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
  const { events } = useCalendarContext();
  const event = events[dateTime.format(EVENT_KEY_FORMAT)];

  return (
    <ECell>
      <Content hasEvent={!!event}/>
    </ECell>
  )
}

interface TimeCellProps {
  hour: number;
}
export const TimeCell = ({ hour }: TimeCellProps) => {
  return (
    <TCell>
      <Time>{hour.toString().padStart(2, '0')}:00</Time>
    </TCell>
  )
}
