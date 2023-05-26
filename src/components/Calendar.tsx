import theme from '../theme.ts';
import styled from 'styled-components';
import { CalendarBar } from './CalendarBar.tsx';
import { CalendarPanel } from './CalendarPanel.tsx';
import { FlxCenter } from '../styles.ts';
import { Footer } from './Footer.tsx';
import { CalendarProvider } from './CalendarContext.tsx';
import { CalendarHeader } from './CalendarHeader.tsx';

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

export const Calendar = () => {

  return (
    <CalendarProvider>
      <CalendarWrapper>
        <CalendarContent>
          <CalendarHeader />
          <CalendarBar />
          <CalendarPanel />
          <Footer />
        </CalendarContent>
      </CalendarWrapper>
    </CalendarProvider>
  );
};
