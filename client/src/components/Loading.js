import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading(){
  return(
    <LoadingBox>
      <LoadingAni bgColor="#e4fbff"/>
      <LoadingAni bgColor="#b8b5ff" aniDelay="0.6s"/>
      <LoadingAni bgColor="#7868e6" aniDelay="1.2s"/>
    </LoadingBox> 
  )
}

const LoadingBox = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  height: 100%;
  align-items: center;
`;

const loadingBounce = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: -8px; 
  }
  70% {
    top: -80px; 
  }

  98% {
    top: 2px;
  }

  100% {
    top: 0;
  }
`;

const LoadingAni = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 10px;
  border-radius: 50%;
  background: ${(props) => props.bgColor || "#e4fbff"};
  animation: 1.8s ${loadingBounce} ${(props) => props.aniDelay || "0s"} infinite;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;



export default Loading;