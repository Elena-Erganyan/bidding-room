import { createGlobalStyle } from 'styled-components';
import RobotoCondensedRegularWoff2 from './fonts/RobotoCondensed-Regular.woff2';
import RobotoCondensedRegularWoff from './fonts/RobotoCondensed-Regular.woff';
import RobotoCondensedRegularTtf from './fonts/RobotoCondensed-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Condensed Regular';
    src: url(${RobotoCondensedRegularWoff2}) format('woff2'),
         url(${RobotoCondensedRegularWoff}) format('woff'),
         url(${RobotoCondensedRegularTtf}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed Regular', 'Roboto', sans-serif;
    color: #333333;
    scrollbar-width: thin;
    scrollbar-color: #cccccc #f4f4f4;
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border: 1px solid #f4f4f4;
    border-radius: 1rem;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: white;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyles;
