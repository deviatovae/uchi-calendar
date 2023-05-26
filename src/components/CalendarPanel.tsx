import styled from 'styled-components';
import { EventCell, TimeCell } from './Cell.tsx';

const PanelWrapper = styled.div`
  display: grid;
  padding-top: 15px;
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(0, 1fr);
  overflow: auto;
`;

export const CalendarPanel = () => {
  const cells = new Array(192).fill('')
  return (
    <PanelWrapper>
      {cells.map((_, i) => {
        return i % 8 === 0 ? <TimeCell key={i} hour={i / 8} /> : <EventCell key={i} />;
      } )}
    </PanelWrapper>
  )
}
