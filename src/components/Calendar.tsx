import theme from '../theme.ts';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { CalendarBar } from './CalendarBar.tsx';
import { CalendarPanel } from './CalendarPanel.tsx';
import { FlxCenter } from '../styles.ts';
import { Footer } from './Footer.tsx';
import { CalendarProvider } from './CalendarContext.tsx';

const CalendarWrapper = styled.div`
  ${FlxCenter};
  margin: 0 auto;
  max-width: ${theme.contentMaxWidth};
  min-width: ${theme.contentMinWidth};
  background-color: ${theme.colors.bgMain};
  -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const CalendarContent = styled.div`
  ${FlxCenter};
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
`;

const CalendarHeader = styled.div`
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

export const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarWrapper>
        <CalendarContent>
          <CalendarHeader>
            <HeaderTitle>Interview Calendar</HeaderTitle>
            <AddEventIcon fontSize='large' sx={{ fill: ` ${theme.colors.highlight}` }} />
          </CalendarHeader>
          <CalendarBar />
          <CalendarPanel />
          <Footer />
        </CalendarContent>
      </CalendarWrapper>
    </CalendarProvider>
  );
};
