import React from 'react';
import styled from 'styled-components';
import { HashRouter , Link } from 'react-router-dom';

import logo from '../img/logo.svg';

function TopMenu(){
  return(
    <N_TopMenu>
      
      <HashRouter>
        <Link to="/">
          <img src={logo} alt="logo" height="30px" />
        </Link>

        <Link to="">
          <A_Login>Log In</A_Login>
        </Link>
      </HashRouter>
    </N_TopMenu>
  );
}

const N_TopMenu = styled.nav`
  max-width: 1024px;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;
  margin: 0 auto;
  // background: #defcf9;
  justify-content: space-between;
  align-items: center;
`; 

const A_Login = styled.a`
  display: flex;
  height: 30px;
  width: 60px;
  justify-content: center;
  align-items : center;
  border-radius: 10px;
  transition : 0.1s;
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:active{
    transform : scale(0.94);
    background: rgb(240, 240, 240);
  }
`;


const B_Login = styled.div`

`;

export default TopMenu;