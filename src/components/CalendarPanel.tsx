import styled from 'styled-components';
import { EventCell, TimeCell } from './Cell.tsx';
import { useCalendarContext } from './CalendarContext.tsx';

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
  const cells = new Array(192).fill('');
  const { weekStart } = useCalendarContext();

  return (
    <PanelWrapper>
      <PanelContent>
        {cells.map((_, i) => {
          if (i % 8 === 0) {
            return <TimeCell key={i} hour={i / 8} />
          }

          const dateTime = weekStart
            .clone()
            .add((i-1) % 8, 'day')
            .add(Math.trunc(i / 8), 'hour');

          return <EventCell dateTime={dateTime} key={i} />;
        } )}
      </PanelContent>
    </PanelWrapper>
  )
}
