import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {useLocation} from "react-router";
import Axios from 'axios';

import getDay from '../components/getDay';

function Result(){
  
  const history = useHistory();

  if(useLocation().state === undefined)
    history.push("/");
  else
    console.log("Aaa");  

  let aa = useLocation();
    
  const location = aa.state.pathKey;

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  let yesterday = getDay();

  useEffect(() =>{
    submitReview();
  })

  async function submitReview (){
    Axios.post('http://localhost:3002/settime',{
      location,
      day: yesterday.realDay,
      time: yesterday.realTime
    }).then(()=>{
      alert('post');
    });
    console.log(setContent.tm);
    
    await Axios.get('http://localhost:3002/get').then(({data})=>{
      setContent(data);
      console.log(data.tm);
      console.log(typeof(data.tm));
      console.log(location);
    }).catch(function (error) {
      console.log("location",location);
      console.log(error);
      console.log("eeeeeeeeeeeeeeeee");
      setUTCI("error");
    });

    setIsLoading(false);
  }

  console.log(content);
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