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
  
  body *{
    @media only screen and (min-width: 1024px) {
      max-width: 1024px;
    }

    @media only screen and (min-width: 720px) {
      max-width: 720px;
    }
  }

  body::-webkit-scrollbar {
    display: none;
}
`;

export default GlobalStyle;