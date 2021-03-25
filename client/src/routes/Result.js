import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import Axios from 'axios';

import GlobalStyle from '../GlobalStyle';

import getDay from '../components/getDay';

function Result(){
  
  if(useLocation().state === undefined)
    window.location.replace("/");
    
  const location = useLocation().state.pathNum;

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  let yesterday = getDay();

  useEffect(()=>{
    submitReview();
  }, []);

  async function submitReview (){
    Axios.post('http://localhost:3002/settime',{
      location,
      day: yesterday.realDay,
      time: yesterday.realTime
    }).then(({data})=>{
      setContent(data);
    }).catch(function (error) {
      console.log(error);
    });

    setIsLoading(false);
  }

  return(
    <D_App>
      <GlobalStyle/>
      {
        isLoading ? (
          <h4>Loading...</h4>
        ) : (
          
          <D_data>
            <p>시간: {content.tm}</p>
            <p>장소: {content.stnNm}</p>
            <p>기온: {content.ta}</p>
            <p>복사온도: {content.ts}</p>
            <p>풍속: {content.ws}</p>
            <p>습도: {content.hm}</p>
            <p>UTCI: {utci}</p>
          </D_data>
        )
      }
    </D_App>
  )
}

const D_App = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  margin: 5%;
  `;
  
  const D_data = styled.div`
  display: inline-block;
  border-radius: 10px;
  background: #defcf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media only screen and (min-width:720px){
    width: 340px;
    height: 480px;
  }

  @media only screen and (max-width:720px){
    width: 240px;
    height: 340px;
  }
`;

export default Result;