import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
