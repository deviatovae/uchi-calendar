import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
