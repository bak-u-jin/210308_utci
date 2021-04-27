import React from 'react';
import styled, { css } from 'styled-components';
import Emoticon_UTCI from './Emoticon_UTCI';

function DataModal({time, content, utci}){
  return(
    <U_dataModal>
      <L_data title="true"><Emoticon_UTCI utci={utci} type={true}/></L_data>
      <L_data>시간: {time}:00</L_data>
      <L_data>장소: {content.stnNm}</L_data>
      <L_data>기온: {content.ta}°C</L_data>
      <L_data>복사온도: {content.ts}°C</L_data>
      <L_data>풍속: {content.ws}m/s</L_data>
      <L_data>습도: {content.hm}%</L_data>
      <L_data>UTCI: {utci}°C</L_data>
    </U_dataModal>
  )
}

const U_dataModal = styled.ul`
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-radius: 10px;
  background: #defcf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 10px 40px;
  
  @media only screen and (min-width:720px){
    width: 300px;
    height: 400px;
    padding: 20px 60px;
    bottom: 30px;
  }
`;

const L_data = styled.li`
  font-size: 1.4rem;
  margin:2px 0;

  ${props => props.title && css`
    @media only screen and (min-width:720px){
      font-size: 2rem;
      margin-bottom: 20px;
      font-weight: 600;
      }
    `}
`;

export default DataModal;