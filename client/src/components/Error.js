import React from 'react';
import styled from 'styled-components';
import errorImg from '../img/warning.png'
import { HashRouter , Link } from 'react-router-dom';

function Error(){
  return(
    <HashRouter>
        <Link to="/">
          <DerrorScreen>
            <IerrorImg src={errorImg}/>
            <DerrorMassage>
              데이터를 불러오는데 실패하였습니다.
            </DerrorMassage>
            <DerrorMassage color="#ff6b6b">
              화면을 <strong>클릭</strong>하면 메인페이지로 돌아갑니다.
            </DerrorMassage>
          </DerrorScreen>
      </Link>
    </HashRouter>
    
  );
}

const DerrorScreen = styled.div`
  padding: 40% 0;
  text-align: center;
`;

const IerrorImg = styled.img`
  width: 20%;
`;

const DerrorMassage = styled.div`
  color: ${(props) => props.color || "#aaa"};

  strong{
    color: #f34750;
  }
`;

export default Error;