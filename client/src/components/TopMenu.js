import React from 'react';
import styled from 'styled-components';
import { HashRouter , Link } from 'react-router-dom';

import {changeMap} from './Store';
import { connect } from 'react-redux';

import logo from '../img/logo.svg';

function TopMenu({changePath}){

  function logoClick(){
    const boxSize = "0 150 560 700";
    const toMap = 0;
    changePath(toMap, boxSize);
  }

  return(
    <N_TopMenu>
      
      <HashRouter>
        <Link to="/">
          <img src={logo} alt="logo" height="30px" onClick={logoClick}/>
        </Link>


      </HashRouter>
    </N_TopMenu>
  );
}

const N_TopMenu = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;
  margin: 0 auto;
  align-items: center;
`; 

function mapDispatchToProps(dispatch) {
  return {
    changePath: (toMap, boxSize) => dispatch(changeMap({toMap, boxSize})),
  };
}

export default connect(null, mapDispatchToProps)(TopMenu);