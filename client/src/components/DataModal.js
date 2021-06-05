import React from 'react';
import styled, { css } from 'styled-components';
import EmoticonUTCI from './EmoticonUTCI';

function DataModal({time, content, utci}){
  return(
    <DataList>
      <Data title="true"><EmoticonUTCI utci={utci} type={true}/></Data>
      <Data>시간: {time}:00</Data>
      <Data>장소: {content.stnNm}</Data>
      <Data>기온: {content.ta}°C</Data>
      <Data>복사온도: {content.ts}°C</Data>
      <Data>풍속: {content.ws}m/s</Data>
      <Data>습도: {content.hm}%</Data>
      <Data>UTCI: {utci}°C</Data>
    </DataList>
  )
}

const DataList = styled.ul`
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

const Data = styled.li`
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