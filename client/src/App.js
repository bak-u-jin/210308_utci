import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import getDay from './getDay';
import Cal_UTCI from './Cal_UTCI';
import Map from './Map'

function App() {
  
  let yesterday = getDay();
  let location=108;

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);

  const submitReview = () => {
    Axios.post('http://localhost:3002/settime',{
      location,
      day: yesterday.realDay,
      time: yesterday.realTime
    }).then(()=>{
      alert('post');
    })
    console.log("aa",location);
    
    Axios.get('http://localhost:3002/get').then(({data})=>{
      setContent(data);
      console.log(data.tm);
      console.log(typeof(data.tm));
      console.log(location);
    })
  }

  const HandleHover = (porpLocation) =>{
    location = porpLocation;
    submitReview();
  }

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content])

  return (
    <D_App className="App">
      <Map HandleHover={HandleHover}/>
      <D_data>
        <h1>시간: {content.tm}</h1>
        <h1>장소: {content.stnNm}</h1>
        <h1>기온: {content.ta}</h1>
        <h1>복사온도: {content.ts}</h1>
        <h1>풍속: {content.ws}</h1>
        <h1>습도: {content.hm}</h1>
        <h1>UTCI: {utci}</h1>
        <button onClick={submitReview}>Yeah</button>
      </D_data>
    </D_App>
  );
}



const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
  
  a{
    text-decoration: none;
  }

  *{
    box-sizing: border-box;
    overflow: visible;
  }
`;

const D_App = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin: 5% auto;
`;

const D_data = styled.div`
  display: inline-block;
  width: 40%;
  background: #defcf9;
`;

export default App;

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