import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #333333;
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
  }

  body::-webkit-scrollbar {
    display: none;
}
`;

export default GlobalStyle;