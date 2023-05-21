import styled from 'styled-components';
import theme from '../theme.ts';

const CellItem = styled.div`
  display: flex;
  min-width: 65px;
  min-height: 80px;
  width: 100%;
  height: 100%;
`;

const ECell = styled(CellItem)`
  border-right: solid 1px ${theme.colors.bgSecondary};
  border-bottom: solid 1px ${theme.colors.bgSecondary};
  padding: 2px;
`;

const Content = styled.span`
  width: 100%;
  height: 100%;
  
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.bgCells};
  }
`;

const TCell = styled(CellItem)`
  display: flex;
  align-items: start;
  justify-content: end;
  min-width: 65px;
  min-height: 80px;
  width: 100%;
  height: 100%;
`;

const Time = styled.span`
  width: 100%;
  text-align: center;
  color: ${theme.colors.textSecondary};
  margin-top: -10px;
`;

export const EventCell = () => {
  return (
    <ECell>
      <Content />
    </ECell>
  )
}

interface TimeCellProps {
  hour: number
}
export const TimeCell = ({ hour }:TimeCellProps) => {
  return (
    <TCell>
      <Time>{hour.toString().padStart(2, '0')}:00</Time>
    </TCell>
  )
}
