import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import theme from '../theme.ts';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import styled from 'styled-components';
import { useCalendarContext } from './CalendarContext.tsx';
import { useCallback } from 'react';

const Bar = styled.div`
  width: 100%;
  background-color: ${theme.colors.bgSecondary};
`;

const List = styled.div<{isDate?: boolean}>`
  display: ${({isDate}) => isDate ? 'flex' : 'grid' };
  margin-left: ${({isDate}) => isDate ? '92.5px' : '' };
  align-items: center;
  justify-content: ${({isDate}) => isDate ? 'space-between' : 'center' };
  padding: ${({isDate}) => isDate ? '5px 20px' : '10px 0 5px 0' };
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(0, 1fr);
  user-select: none;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const ArrowBefore = styled(NavigateBeforeOutlinedIcon)`
  &:hover {
    cursor: pointer;
    fill: ${theme.colors.highlightHover};
  }
`;

const ArrowNext = styled(NavigateNextOutlinedIcon)`
  &:hover {
    cursor: pointer;
    fill: ${theme.colors.highlightHover};
  }
`;


const Day = styled(ListItem)<{ isToday : boolean }>`
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  height: 100%;
  background-color: ${({ isToday }) => isToday ? theme.colors.highlight : ''};
  color: ${({ isToday }) => isToday ? theme.colors.bgMain : ''};
  border-radius: 50%;
  aspect-ratio: 1/1;
`;

const DayWrapper = styled(ListItem)`
  width: 100%;
  height: 100%;
  max-height: 60px;
  aspect-ratio: 1/1;
`;

const Date = styled.div`
  font-size: 1.1rem;
  padding: 0 10px;
  font-weight: 500;
  text-align: center;
`;

export const CalendarBar = () => {
  const { now, week, weekStart, setWeekStart } = useCalendarContext();

  const updateWeekStart = useCallback((isForward = false) => {
    if (isForward) {
      setWeekStart(weekStart.clone().subtract(1, 'week'));
      return;
    }
    setWeekStart(weekStart.clone().add(1, 'week'));
  }, [setWeekStart, weekStart])

  return (
    <Bar>
      <List>
        <ListItem/>
        <ListItem>Sun</ListItem>
        <ListItem>Mon</ListItem>
        <ListItem>Tue</ListItem>
        <ListItem>Wed</ListItem>
        <ListItem>Thu</ListItem>
        <ListItem>Fri</ListItem>
        <ListItem>Sat</ListItem>
      </List>
      <List>
        <ListItem/>
        {week.map((day, i) => <DayWrapper key={i}><Day isToday={!now.diff(day, 'day')}>{day.format('D')}</Day></DayWrapper>)}
      </List>
      <List isDate>
        <ArrowBefore fontSize="large" sx={{ fill: ` ${theme.colors.highlight}` }} onClick={() => updateWeekStart()}/>
        <Date>{now.format('DD MMMM YYYY')}</Date>
        <ArrowNext fontSize="large" sx={{ fill: ` ${theme.colors.highlight}` }} onClick={() => updateWeekStart(true)}/>
      </List>
    </Bar>
  )
}
