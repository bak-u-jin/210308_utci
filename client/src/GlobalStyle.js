import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }  

  a{
    text-decoration: none;
  }

  p{
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 10px auto;
    
    @media only screen and (min-width:720px){
      font-size: 1em;
    }
  
    @media only screen and (max-width:720px){
      font-size: 0.8em;
    }
  }
`;

export default GlobalStyle;