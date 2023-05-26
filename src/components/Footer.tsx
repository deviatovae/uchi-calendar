import styled from 'styled-components';
import { FlxCenter } from '../styles.ts';
import theme from '../theme.ts';

const BottomPanel = styled.div`
  ${FlxCenter};
  background-color: ${theme.colors.bgSecondary};
`

const BottomPanelContent = styled.div`
  ${FlxCenter};
  height: 50px;
  margin-top: auto;
  margin-bottom: 0;
  padding: 25px;
  justify-content: space-between;
  color: ${theme.colors.highlight};
  font-size: 1.1rem;
`
export const Footer = () => {
  return (
    <BottomPanel>
      <BottomPanelContent>
        <span>Today</span>
      </BottomPanelContent>
    </BottomPanel>
  )
}
