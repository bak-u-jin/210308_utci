import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import GlobalStyle from '../GlobalStyle';

import getDay from '../components/getDay';
import Cal_UTCI from '../components/Cal_UTCI';
import Map from '../components/Map';
import Emoticon_UTCI from '../components/Emoticon_UTCI';



function Home() {

  const history = useHistory();
  let yesterday = getDay();
  let location;
  

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);
  const [handleMap, setHandleMap] = useState(0);
  const [boxSize, setBoxSize] = useState("0 150 560 700");
  const [state,setState] = useState("지역을 선택하세요");
  // const [changeMap,setChangeMap] = useState(1);

  // Axios.get('http://localhost:3002/').then(() =>{
  //   console.log("get");
  // });

  async function submitReview (){

    Axios.post('http://localhost:3002/setTime',{
      location,
      day: yesterday.realDay,
      time: yesterday.realTime
    }).then(({data})=>{
      setContent(data);
    }).catch(function (error) {
      console.log(error);
    });

    // setIsLoading(false);
  }


  const HandleHover = (num, toMap) =>{
    if(!toMap){
      console.log("num ",num);
      location = num;
      submitReview();
    }
  }
  
  const HandleClick = (num, toMap, boxSize) =>{
    console.log(toMap);
    // if(num == 8)
      // setChangeMap(2);
    if(toMap == true){
      setHandleMap(1);
      setBoxSize(boxSize);
    }
    else{
      history.push({
        pathname: "/result",
        state: {
          pathNum : num,
        }
      });
    }
  }

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content])

  // useEffect(() =>{
  //   console.log("cc",changeMap);
  // },[changeMap])

  return (
    <D_App className="App">
      <GlobalStyle/>
      <Map handleMap={handleMap} boxSize={boxSize} HandleHover={HandleHover} HandleClick={HandleClick}/>
      <D_data>
          <p>UTCI: {utci}</p>
          <Emoticon_UTCI utci={utci}/>
      </D_data>
      
    </D_App>
  );
}

const D_App = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
`;

const D_data = styled.div`
  display: inline-block;
  border-radius: 10px;
  background: #defcf9;
  
  @media only screen and (min-width:720px){
    width: 340px;
    height: 440px;
  }

  @media only screen and (max-width:720px){
    width: 240px;
    height: 300px;
  }
`;


export default Home;

// const [utciArea,setUtciArea] = useState({
  //   id: 'a',
  //   password: '123'
  // });

// Axios.post('http://localhost:3002/signup',{
    //   id:utciArea.id,
    //   password:utciArea.password
    // }).then(()=>{
    //   alert('yeah');
    // })
    // // Axios.get('http://localhost:3002/get',{
    // // }).then((response)=>{
    // //   setContent(response.data);
    // //   console.log(response.data);
    // // })

    // {
    //   // location == undefined ? (
    //   //   console.log("bbb",location),
    //   //   <h1>장소를 선택해주세요</h1>
    //   //   ) : (
    //       // content.tm == null ? (<h1>Loading...</h1>) : (
    //       <h1>시간: {content.tm}</h1>,
    //       <h1>장소: {content.stnNm}</h1>,
    //       <h1>기온: {content.ta}</h1>,
    //       <h1>복사온도: {content.ts}</h1>,
    //       <h1>풍속: {content.ws}</h1>,
    //       <h1>습도: {content.hm}</h1>,
    //       <h1>UTCI: {utci}</h1>
    //       // <button onClick={submitReview}>Yeah</button>,
    //       // )
    //   // )
    // }