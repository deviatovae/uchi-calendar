import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import theme from '../theme.ts';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import styled from 'styled-components';
import moment from 'moment';

const Bar = styled.div`
  width: 100%;
  background-color: ${theme.colors.bgSecondary};
`;

const List = styled.div<{isDate?: boolean}>`
  display: ${({isDate}) => isDate ? 'flex' : 'grid' };
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(0, 1fr);
  user-select: none;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50px;
  max-height: 50px;
  aspect-ratio: 1 / 1;
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
  background-color: ${({ isToday }) => isToday ? theme.colors.highlight : ''};
  color: ${({ isToday }) => isToday ? theme.colors.bgMain : ''};
  padding: 4px;
  border-radius: 50%;
  
  &:hover {
    cursor: pointer;
    background-color: ${({ isToday }) => !isToday ? theme.colors.highlight : ''};
    color: ${({ isToday }) => !isToday ? theme.colors.bgMain : ''};
  }
`;

const Date = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
`;

export const CalendarBar = () => {
  const now = moment();
  const todayDate = +now.format('DD');
  const date = now.format('DD MMMM YYYY');
  const weekStart = now.startOf('week').format('DD');
  const week = new Array(7).fill(weekStart).map((date, index) => +date + index);

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
        {week.map((day, i) => <Day key={i} isToday={todayDate === day}>{day}</Day>)}
      </List>
      <List isDate>
        <ArrowBefore fontSize="large" sx={{ fill: ` ${theme.colors.highlight}` }} />
        <Date>{date}</Date>
        <ArrowNext fontSize="large" sx={{ fill: ` ${theme.colors.highlight}` }} />
      </List>
    </Bar>
  )
}
