import styled from 'styled-components';
import { FlxCenter } from '../styles.ts';
import theme from '../theme.ts';
import { CalendarContext } from './CalendarContext.tsx';
import { useContext } from 'react';

const BottomPanel = styled.div`
  ${FlxCenter};
  background-color: ${theme.colors.bgSecondary};
`;

const BottomPanelContent = styled.div`
  ${FlxCenter};
  height: 50px;
  margin-top: auto;
  margin-bottom: 0;
  padding: 25px;
  justify-content: space-between;
  color: ${theme.colors.highlight};
  font-size: 1.1rem;
  user-select: none;
  
  & > span {
    padding: 7px;
    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.highlight};
      color: ${theme.colors.bgMain};
      border-radius: 10px;
      transition: background-color 0.3s ease-in-out;
    }
  }
`
export const Footer = () => {
  const { setToday, selectedEvent, deleteEvent } = useContext(CalendarContext);

  return (
    <BottomPanel>
      <BottomPanelContent>
        <span onClick={setToday}>Today</span>
        {selectedEvent && <span onClick={deleteEvent}>Delete</span>}
      </BottomPanelContent>
    </BottomPanel>
  )
}
