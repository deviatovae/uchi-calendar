import theme from '../theme.ts';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { useCalendarContext } from './CalendarContext.tsx';
import moment from 'moment';
import { FlxCenter } from '../styles.ts';
import { FORMAT } from '../consts.ts';

const Header = styled.div`
  ${FlxCenter};
  padding: 0 50px;
  justify-content: space-between;
  height: ${theme.headerHeight};
  transition: 0.2s all;
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const HeaderTitle = styled.h1`
  justify-content: space-between;
  font-size: 24px;
  font-weight: 300;
  color: ${theme.colors.textMain};
`;

const AddEventIcon = styled(AddIcon)`
  &:hover {
    cursor: pointer;
    fill: ${theme.colors.highlightHover};
  }
`;
export const CalendarHeader = () => {
  const { addEvent } = useCalendarContext();
  const handleClick = () => {
    const date = prompt(`Please, enter the date (${FORMAT})`);
    if (!date) {
      alert('No date provided');
      return;
    }

    const checkedDate = moment(date, FORMAT);
    if (!checkedDate.isValid()) {
      alert('Invalid date');
      return;
    }

    addEvent(checkedDate);
    alert('Date has been added');
  }

  return (
    <Header>
      <HeaderTitle>Interview Calendar</HeaderTitle>
      <AddEventIcon fontSize='large' sx={{ fill: ` ${theme.colors.highlight}` }} onClick={handleClick} />
    </Header>
  );
};
