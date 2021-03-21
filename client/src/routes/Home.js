import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import { useHistory } from "react-router-dom";

import getDay from '../components/getDay';
import Cal_UTCI from '../components/Cal_UTCI';
import Map from '../components/Map';

// const Foo = () => {
//   return <button>FOO</button>;
// };

// const Bar = () => {
//   return <button>BAR</button>;
// };

// const Default = () => {
//   return <button>DEFAULT</button>;
// };

// const ENUM_STATES = {
//   1: <Foo />,
//   2: <Bar />,
//   3: <Default />
// };

function Home() {

  const history = useHistory();
  let yesterday = getDay();
  let location;

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);
  const [state,setState] = useState("지역을 선택하세요");
  // const [changeMap,setChangeMap] = useState(1);

  // Axios.get('http://localhost:3002/').then(() =>{
  //   console.log("get");
  // });

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

    // setIsLoading(false);
  }


  const HandleHover = (porpLocation) =>{
    console.log("num ",porpLocation);
    location = porpLocation;
    submitReview();
  }
  
  const HandleClick = (key) =>{
    console.log(key);
    // if(key == 8)
      // setChangeMap(2);

    history.push({
      pathname: "/result",
      state: {
        pathKey : key,
      }
    });
  }

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content])

  // useEffect(() =>{
  //   console.log("cc",changeMap);
  // },[changeMap])

  return (
    <D_App className="App">
      <Map HandleHover={HandleHover} HandleClick={HandleClick}/>
      <D_data>
          <h1>시간: {content.tm}</h1>
          <h1>장소: {content.stnNm}</h1>
          <h1>기온: {content.ta}</h1>
          <h1>복사온도: {content.ts}</h1>
          <h1>풍속: {content.ws}</h1>
          <h1>습도: {content.hm}</h1>
          <h1>UTCI: {utci}</h1>
      </D_data>
      {/* <div>
        {ENUM_STATES[changeMap]}
      </div> */}
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