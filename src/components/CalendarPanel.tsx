import styled from 'styled-components';
import { EventCell, TimeCell } from './Cell.tsx';

const PanelWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const PanelContent = styled.div`
  display: grid;
  padding-top: 15px;
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(0, 1fr);
`;

export const CalendarPanel = () => {
  const cells = new Array(192).fill('')
  return (
    <PanelWrapper>
      <PanelContent>
        {cells.map((_, i) => {
          return i % 8 === 0 ? <TimeCell key={i} hour={i / 8} /> : <EventCell key={i} />;
        } )}
      </PanelContent>
    </PanelWrapper>
  )
}
