import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styled, { css } from "styled-components";

function HowToUse(){
  let now = new Date;
  let after1D = new Date();

  const [cookies, setCookie, removeCookie] = useCookies(['knowToUse']);
  const [closeModal, setCloseModal] = useState(false);

  function clickNoSee(){
    // after1D.setMinutes(now.getDate() +1);
    after1D.setMinutes(now.getMinutes() +1);
    setCookie('knowToUse', true, {path:'/', expires:after1D})  
  }
  function clickClose(){
    setCloseModal(true);
  }

  return(
    <D_useModal closeModal={closeModal}>
      <button onClick={clickNoSee}>오늘 그만보기</button>
      <button onClick={clickClose}>닫기</button>
    </D_useModal>
  );
}

const D_useModal = styled.div`
  position: absolute;
  left:50%;
  transform:translateX(-50%);
  width: 80vw;
  height: 80vh;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${(props) =>
    (props.closeModal) && css`
      display:none;
      z-index:-5;
    `}
  }
`;

export default HowToUse;