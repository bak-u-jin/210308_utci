import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router";
import Axios from 'axios';

import getDay from '../components/getDay';

function Result(){
  
  if(useLocation().state === undefined)
    window.location.replace("/");
    
  const location = useLocation().state.pathKey;

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
    <div>
      {
        isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <h4>{location}</h4>
            <h1>시간: {content.tm}</h1>
            <h1>장소: {content.stnNm}</h1>
            <h1>기온: {content.ta}</h1>
            <h1>복사온도: {content.ts}</h1>
            <h1>풍속: {content.ws}</h1>
            <h1>습도: {content.hm}</h1>
          </div>
        )
      }
    </div>
  )
}

export default Result;