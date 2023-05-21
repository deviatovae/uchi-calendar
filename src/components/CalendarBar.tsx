import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import theme from '../theme.ts';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import styled from 'styled-components';
import { FlxCenter } from './Calendar.tsx';

const Bar = styled.div`
  ${FlxCenter};
  padding: 5px 5px 5px 60px;
  height: 140px;
  flex-direction: column;
  background-color: ${theme.colors.bgSecondary};
  @media (max-width: 400px) {
    padding: 5px 5px 5px 40px;
  }
`;

const List = styled.div`
  ${FlxCenter};
  justify-content: space-between;
`;

const ListItem = styled.div`
  ${FlxCenter};
  justify-content: center;
  width: 40px;
  height: 40px;
  text-transform: uppercase;
`;

const Day = styled(ListItem)`
  padding: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.highlight};
    color: ${theme.colors.bgMain};
    border-radius: 50%;
  }
`;

const Date = styled.div`
  font-size: 1.1rem;
  text-align: center;
`;

export const CalendarBar = () => {
  return (
    <Bar>
      <List>
        <ListItem>Mon</ListItem>
        <ListItem>Tue</ListItem>
        <ListItem>Wed</ListItem>
        <ListItem>Thu</ListItem>
        <ListItem>Fri</ListItem>
        <ListItem>Sat</ListItem>
        <ListItem>Sun</ListItem>
      </List>
      <List>
        <Day>1</Day>
      </List>
      <List>
        <NavigateBeforeOutlinedIcon fontSize="large" sx={{ fill: ` ${theme.colors.highlight}` }} />
        <Date>1 March 2023</Date>
        <NavigateNextOutlinedIcon fontSize="large" sx={{ fill: ` ${theme.colors.highlight}` }} />
      </List>
    </Bar>
  )
}
