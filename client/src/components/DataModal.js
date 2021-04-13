import React from 'react';
import styled from 'styled-components';

// time={yesterday.realTime}
//                 content = {content}
//                 utci = {utci}

function DataModal({time, content, utci}){
  return(
    <U_dataModal>
      <li>시간: {time}:00</li>
      <li>장소: {content.stnNm}</li>
      <li>기온: {content.ta}°C</li>
      <li>복사온도: {content.ts}°C</li>
      <li>풍속: {content.ws}m/s</li>
      <li>습도: {content.hm}%</li>
      <li>UTCI: {utci}°C</li>
    </U_dataModal>
  )
}

const U_dataModal = styled.ul`
  position: absolute;
  top: 30px;
  left: 160px;
  padding: 20px;
  border-radius: 10px;
  background: #defcf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media only screen and (min-width:720px){
    width: 300px;
    height: 400px;
  }

  @media only screen and (max-width:720px){
    width: 240px;
    height: 340px;
  }

  li{
    margin:2px 0;
    font-size: 2rem;
  }

`;

export default DataModal;